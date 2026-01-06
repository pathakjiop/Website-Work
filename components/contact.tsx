// "use client"

// import type React from "react"
// import { useState } from "react"
// import { MapPin, Phone, Mail, Clock } from "lucide-react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     alert("Thank you for your inquiry. We will be in touch shortly.")
//     setFormData({ name: "", email: "", company: "", message: "" })
//   }

//   return (
//     <section id="contact" className="py-20 md:py-28 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Get In Touch</p>
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Reach out to our team for personalized advisory and compliance solutions
//           </p>
//         </div>

//         {/* Contact Info & Form Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-12">
//           {/* Contact Details */}
//           <div className="space-y-6">
//             {/* Address */}
//             <div className="flex gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                 <MapPin className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="font-bold text-foreground mb-2">Mumbai Office</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   123 Business Plaza
//                   <br />
//                   Fort, Mumbai
//                   <br />
//                   Maharashtra 400001, India
//                 </p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                 <Phone className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="font-bold text-foreground mb-2">Phone</h3>
//                 <p className="text-sm text-muted-foreground">
//                   +91 (22) 1234-5678
//                   <br />
//                   +91 (22) 1234-5679
//                 </p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                 <Mail className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="font-bold text-foreground mb-2">Email</h3>
//                 <p className="text-sm text-muted-foreground">
//                   <a href="mailto:info@eagleswift.com" className="hover:text-primary transition-colors">
//                     info@eagleswift.com
//                   </a>
//                   <br />
//                   <a href="mailto:support@eagleswift.com" className="hover:text-primary transition-colors">
//                     support@eagleswift.com
//                   </a>
//                 </p>
//               </div>
//             </div>

//             {/* Hours */}
//             <div className="flex gap-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                 <Clock className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
//                 <p className="text-sm text-muted-foreground">
//                   Monday - Friday
//                   <br />
//                   9:00 AM - 6:00 PM IST
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//             <form onSubmit={handleSubmit} className="lg:col-span-2 p-8 bg-card border border-border rounded-xl">
//               <div className="space-y-5">
//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="John Doe"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="john@company.com"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label>
//                   <input
//                     type="text"
//                     name="company"
//                     placeholder="Your Company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-foreground mb-2">How can we help? *</label>
//                   <textarea
//                     name="message"
//                     placeholder="Tell us about your advisory and compliance needs..."
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out to our team for personalized advisory and compliance solutions
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactItem
            icon={<MapPin className="w-6 h-6" />}
            title="Mumbai Office"
          >
            123 Business Plaza
            <br />
            Fort, Mumbai
            <br />
            Maharashtra 400001, India
          </ContactItem>

          <ContactItem
            icon={<Phone className="w-6 h-6" />}
            title="Phone"
          >
            +91 (22) 1234-5678
            <br />
            +91 (22) 1234-5679
          </ContactItem>

          <ContactItem
            icon={<Mail className="w-6 h-6" />}
            title="Email"
          >
            <a
              href="mailto:info@eagleswift.com"
              className="hover:text-primary transition-colors"
            >
              info@eagleswift.com
            </a>
            <br />
            <a
              href="mailto:support@eagleswift.com"
              className="hover:text-primary transition-colors"
            >
              support@eagleswift.com
            </a>
          </ContactItem>

          <ContactItem
            icon={<Clock className="w-6 h-6" />}
            title="Business Hours"
          >
            Monday – Friday
            <br />
            9:00 AM – 6:00 PM IST
          </ContactItem>
        </div>
      </div>
    </section>
  )
}
