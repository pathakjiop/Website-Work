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
    /* Card - Corners updated to rounded-2xl */
    <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300">
      {/* Icon Box - Corners updated to rounded-xl */}
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
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
              className="hover:text-primary transition-colors block"
            >
              info@eagleswift.com
            </a>
            <a
              href="mailto:support@eagleswift.com"
              className="hover:text-primary transition-colors block"
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