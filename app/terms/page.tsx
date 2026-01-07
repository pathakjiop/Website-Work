"use client"

import { useState, useEffect } from "react"

const sections = [
  { id: "agreement", title: "1. Agreement to Terms", number: "1" },
  { id: "services", title: "2. Services Description", number: "2" },
  { id: "ip-rights", title: "3. Intellectual Property Rights", number: "3" },
  { id: "user-responsibilities", title: "4. User Responsibilities", number: "4" },
  { id: "limitation", title: "5. Limitation of Liability", number: "5" },
  { id: "disclaimer", title: "6. Professional Advice Disclaimer", number: "6" },
  { id: "confidentiality", title: "7. Confidentiality", number: "7" },
  { id: "modification", title: "8. Modification of Terms", number: "8" },
  { id: "governing-law", title: "9. Governing Law", number: "9" },
  { id: "contact", title: "10. Contact Information", number: "10" },
]

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState("agreement")

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
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">Legal Document</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Terms &<span className="block text-primary">Conditions</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed pt-4">
                  Please read these terms carefully before using our services. By accessing and using this website, you
                  agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
            {/* Agreement Section */}
            <section id="agreement" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    By accessing and using this website and the services provided by EgaleSwift Global Advisors, you
                    agree to be bound by these Terms & Conditions. If you do not agree to abide by the above, please do
                    not use this service.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* Services Section */}
            <section id="services" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Services Description</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    EgaleSwift Global Advisors provides professional advisory services including:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Accounting and Taxation Services",
                      "Auditing Services",
                      "Compliance Services",
                      "Business Advisory Services",
                    ].map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-base text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    These services are provided to clients in India and offshore jurisdictions. All services are subject
                    to our engagement agreements and applicable laws.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* IP Rights Section */}
            <section id="ip-rights" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and software, is the property
                    of EgaleSwift Global Advisors or its content suppliers and is protected by international copyright
                    laws.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* User Responsibilities Section */}
            <section id="user-responsibilities" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">4</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account and password and for
                    restricting access to your computer. You agree to accept responsibility for all activities that
                    occur under your account.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* Limitation Section */}
            <section id="limitation" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">5</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    In no event shall EgaleSwift Global Advisors be liable for any indirect, incidental, special, or
                    consequential damages arising out of or related to this website or the services provided, even if we
                    have been advised of the possibility of such damages.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* Disclaimer Section */}
            <section id="disclaimer" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">6</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Advice Disclaimer</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Information provided on this website or through our services should not be construed as professional
                    advice without proper engagement. Always consult with qualified professionals before making any
                    business or financial decisions.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* Confidentiality Section */}
            <section id="confidentiality" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">7</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Client information is treated with utmost confidentiality and is protected under professional
                    privilege. We comply with all applicable confidentiality laws and regulations in India and offshore
                    jurisdictions where we operate.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* Modification Section */}
            <section id="modification" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">8</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Modification of Terms</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    EgaleSwift Global Advisors reserves the right to modify these terms and conditions at any time.
                    Changes will be effective upon posting to the website.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* Governing Law Section */}
            <section id="governing-law" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">9</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    These Terms & Conditions are governed by and construed in accordance with the laws of India, and you
                    irrevocably submit to the exclusive jurisdiction of the courts located in India.
                  </p>
                </div>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-border via-border to-transparent" />

            {/* Contact Section */}
            <section id="contact" className="space-y-4 scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">10</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    If you have any questions about these Terms & Conditions, please contact us:
                  </p>
                  <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                    <p className="font-semibold text-foreground text-lg">EgaleSwift Global Advisors</p>
                    <div className="space-y-2">
                      <p className="text-base text-muted-foreground">
                        <span className="font-medium text-foreground">Email: </span>
                        legal@EgaleSwift.com
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
