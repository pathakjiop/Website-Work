import { Award, Users, Globe, Briefcase } from "lucide-react"

export default function About() {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Chief Consultant",
      bio: "CA with 20+ years of experience in international taxation and cross-border advisory. Expert in FEMA, transfer pricing, and multinational restructuring.",
      expertise: "International Taxation",
      image: "/professional-male-advisor-rajesh-kumar-headshot.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Director, Compliance & Auditing",
      bio: "CPA with expertise in statutory audits and regulatory compliance across multiple jurisdictions. Specializes in financial statement audit and SOX compliance.",
      expertise: "Auditing & Compliance",
      image: "/professional-female-director-priya-sharma-headshot.jpg",
    },
    {
      name: "Amit Patel",
      role: "Senior Tax Advisor",
      bio: "Specializes in transfer pricing, GST compliance, and corporate restructuring for multinational clients. 15+ years in cross-border taxation.",
      expertise: "Transfer Pricing",
      image: "/professional-male-senior-advisor-amit-patel.jpg",
    },
    {
      name: "Neha Verma",
      role: "Business Advisory Lead",
      bio: "MBA from IIMA, focused on financial planning and strategic growth initiatives for SMEs and startups. Expert in business valuation and M&A advisory.",
      expertise: "Business Strategy",
      image: "/professional-female-business-advisor-neha-verma.jpg",
    },
  ]

  const highlights = [
    { icon: Award, title: "Industry Expertise", description: "20+ years of combined experience" },
    { icon: Globe, title: "Global Reach", description: "Serving Indian and offshore clients worldwide" },
    { icon: Users, title: "Dedicated Team", description: "Experienced professionals committed to excellence" },
    { icon: Briefcase, title: "Proven Track Record", description: "Successfully delivered 500+ projects" },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Know Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About EagleSwift</h2>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Vision & Motto Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the most trusted and reliable advisory partner for businesses operating in India and globally. We
              empower our clients through strategic financial insights, regulatory expertise, and innovative solutions
              that drive sustainable growth and create lasting value.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 rounded-xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Motto</h3>
            <p className="text-2xl font-bold text-primary mb-4">"Trust. Expertise. Growth."</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in building long-term relationships with our clients through transparent communication, deep
              expertise, and a commitment to delivering measurable results. Your success is our success.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="mb-8">
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Leadership</p>
            <h3 className="text-3xl font-bold text-foreground">Our Expert Team</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 bg-muted overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                      {member.expertise}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                    <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
