"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitConsultation(formData: FormData) {
  try {
    // Extract form data
    const data = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company_name: formData.get("companyName") as string,
      industry: formData.get("industry") as string,
      company_size: formData.get("companySize") as string,
      service_type: formData.get("serviceType") as string,
      preferred_date: formData.get("preferredDate") as string,
      message: formData.get("message") as string,
      terms_accepted: formData.get("terms") === "on",
      created_at: new Date().toISOString(),
    }

    // Validate required fields
    if (!data.first_name || !data.last_name || !data.email || !data.phone || !data.service_type || !data.message) {
      return { success: false, error: "Please fill in all required fields." }
    }

    if (!data.terms_accepted) {
      return { success: false, error: "You must accept the terms and conditions." }
    }

    // Create Supabase client
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
            } catch {
              // Handle cookie setting errors
            }
          },
        },
      },
    )

    // Insert into Supabase database
    const { error: insertError } = await supabase.from("consultations").insert([data])

    if (insertError) {
      console.error("Supabase insert error:", insertError)
      return { success: false, error: "Failed to submit your request. Please try again." }
    }

    // Send email notification to your email
    try {
      await resend.emails.send({
        from: "Consultations <onboarding@resend.dev>", // Change this after domain verification
        to: [process.env.ADMIN_EMAIL!], // Your email address
        subject: `New Consultation Request from ${data.first_name} ${data.last_name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
              New Consultation Request
            </h2>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4F46E5; margin-top: 0;">Personal Information</h3>
              <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            </div>

            ${data.company_name ? `
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4F46E5; margin-top: 0;">Business Information</h3>
              <p><strong>Company:</strong> ${data.company_name}</p>
              ${data.industry ? `<p><strong>Industry:</strong> ${data.industry}</p>` : ''}
              ${data.company_size ? `<p><strong>Company Size:</strong> ${data.company_size}</p>` : ''}
            </div>
            ` : ''}

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4F46E5; margin-top: 0;">Service Details</h3>
              <p><strong>Service Type:</strong> ${data.service_type}</p>
              ${data.preferred_date ? `<p><strong>Preferred Date:</strong> ${data.preferred_date}</p>` : ''}
            </div>

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4F46E5; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${data.message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p>Submitted on: ${new Date(data.created_at).toLocaleString()}</p>
            </div>
          </div>
        `,
      })

      // Optional: Send confirmation email to the user
      await resend.emails.send({
        from: "EgalesWift Global Advisors <onboarding@resend.dev>",
        to: [data.email],
        subject: "We've Received Your Consultation Request",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
              Thank You for Your Interest!
            </h2>
            
            <p>Dear ${data.first_name},</p>
            
            <p>Thank you for requesting a consultation with EgalesWift Global Advisors. We have received your request and will get back to you within 24 hours.</p>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
              <h3 style="color: #16a34a; margin-top: 0;">Request Summary</h3>
              <p><strong>Service Type:</strong> ${data.service_type}</p>
              ${data.preferred_date ? `<p><strong>Preferred Date:</strong> ${data.preferred_date}</p>` : ''}
            </div>
            
            <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
            
            <p style="margin-top: 30px;">Best regards,<br><strong>EgalesWift Global Advisors Team</strong></p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p>This is an automated confirmation email. Please do not reply to this message.</p>
            </div>
          </div>
        `,
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      // Don't fail the entire request if email fails
      // The data is already saved in the database
    }

    console.log("New consultation request:", data)
    return { success: true }
  } catch (error) {
    console.error("Consultation submission error:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}