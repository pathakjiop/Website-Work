import { BarChart3, Shield, TrendingUp, FileCheck } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Accounting & Taxation",
      description:
        "Strategic accounting and tax planning services designed to optimize your financial performance. We ensure compliance with regulatory requirements while maximizing your tax efficiency across all jurisdictions.",
      features: ["Tax Planning", "Financial Reporting", "GST Compliance", "Transfer Pricing"],
    },
    {
      icon: FileCheck,
      title: "Auditing Services",
      description:
        "Comprehensive statutory and internal audits providing independent assurance. Our experienced auditors deliver actionable insights to improve operational efficiency and strengthen financial controls.",
      features: ["Statutory Audits", "Internal Audits", "Risk Assessment", "Process Improvement"],
    },
    {
      icon: Shield,
      title: "Compliance Services",
      description:
        "Stay ahead of regulatory requirements across multiple jurisdictions. We implement robust compliance frameworks and keep your organization updated with changing regulations.",
      features: ["Regulatory Updates", "Policy Implementation", "Compliance Audit", "Risk Mitigation"],
    },
    {
      icon: TrendingUp,
      title: "Advisory Services",
      description:
        "Strategic business advisory to drive sustainable growth and profitability. From financial planning to risk management, we guide your organization toward long-term success.",
      features: ["Business Strategy", "Financial Planning", "Risk Management", "Growth Initiatives"],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Comprehensive Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions to meet the unique needs of Indian and offshore businesses, delivering measurable results
            and strategic value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
