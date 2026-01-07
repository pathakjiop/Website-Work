"use client"

import { useState, useEffect } from "react"

const sections = [
  { id: "introduction", title: "1. Introduction", number: "1" },
  { id: "collection", title: "2. Information We Collect", number: "2" },
  { id: "usage", title: "3. How We Use Your Information", number: "3" },
  { id: "sharing", title: "4. Information Sharing", number: "4" },
  { id: "security", title: "5. Data Security", number: "5" },
  { id: "rights", title: "6. Your Rights", number: "6" },
  { id: "cookies", title: "7. Cookies & Tracking", number: "7" },
  { id: "changes", title: "8. Changes to Policy", number: "8" },
  { id: "contact", title: "9. Contact Information", number: "9" },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(id)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="flex">
        {/* Sticky Sidebar Navigation */}
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card p-8 overflow-y-auto hidden lg:block">
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Contents</h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {section.number}
                </button>
              ))}
            </nav>
          </div>
          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">Last Updated: January 2026</p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:ml-64">
          {/* Header Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">Legal Privacy</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Privacy <span className="block text-primary">Policy</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed pt-4">
                  EagleSwift Global Advisors is committed to protecting your privacy. This policy explains how we
                  collect, use, and safeguard your data.
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
            
            {/* 1. Introduction */}
            <section id="introduction" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    EagleSwift Global Advisors ("we," "us," "our," or "Company") is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                    visit our website and use our services.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* 2. Collection */}
            <section id="collection" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    We may collect information about you in a variety of ways, including:
                  </p>
                  <ul className="space-y-4">
                    {[
                      { label: "Personal Information", desc: "Name, email address, phone number, and details you provide voluntarily." },
                      { label: "Professional Information", desc: "Business needs, financial matters, and service requirements." },
                      { label: "Usage Data", desc: "IP addresses, browser type, and interaction data via our website." },
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-base text-muted-foreground">
                          <strong className="text-foreground">{item.label}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* 3. Usage */}
            <section id="usage" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <ul className="space-y-3">
                    {[
                      "Maintaining and improving our advisory services",
                      "Processing transactions and related information",
                      "Responding to inquiries and customer support",
                      "Compliance with legal and regulatory requirements",
                    ].map((usage, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-base text-muted-foreground">{usage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* 4. Sharing */}
            <section id="sharing" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We do not sell, trade, or rent your personal information. We may share your data with trusted
                    service providers who assist our operations, strictly subject to confidentiality agreements and
                    professional privilege.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* 5. Security */}
            <section id="security" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">5</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your information against
                    unauthorized access. While we strive for maximum security, no electronic transmission is 100% secure.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* 6. Rights */}
            <section id="rights" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">6</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Depending on your jurisdiction, you may have rights to access, correct, or delete your data.
                    Please contact our privacy team to exercise these rights.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* 7. Cookies */}
            <section id="cookies" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">7</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We use cookies to enhance user experience. You can manage your preferences through your browser 
                    settings at any time.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* 8. Changes */}
            <section id="changes" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">8</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Policy</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We may update this policy periodically. Changes are effective immediately upon posting to the 
                    website with an updated timestamp.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* 9. Contact */}
            <section id="contact" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">9</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    For privacy-related inquiries, reach out to our data protection officer:
                  </p>
                  <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                    <p className="font-semibold text-foreground text-lg">EagleSwift Global Advisors</p>
                    <div className="space-y-2">
                      <p className="text-base text-muted-foreground">
                        <span className="font-medium text-foreground">Email: </span>
                        privacy@eagleswift.com
                      </p>
                      <p className="text-base text-muted-foreground">
                        <span className="font-medium text-foreground">Phone: </span>
                        +91 (0) XXXXX XXXXX
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground">Last Updated: January 2026</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
