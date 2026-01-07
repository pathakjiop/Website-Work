import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-wide mb-4">
            Professional Financial Advisory
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance leading-tight">
            Excellence in Global Financial Advisory
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary-foreground/95 mb-6 italic">
            "Trust. Expertise. Growth."
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
            EgaleSwift Global Advisors is your trusted partner for comprehensive accounting, auditing, compliance, and
            strategic advisory services. Serving Indian and offshore clients with expertise and integrity across
            borders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Schedule Consultation
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
