import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">E</span>
                </div>
                <div>
                  <h4 className="font-bold">EagleSwift</h4>
                  <p className="text-xs opacity-75">Global Advisors</p>
                </div>
              </div>
              <p className="text-sm opacity-85 leading-relaxed">
                Professional advisory and compliance solutions for Indian and offshore clients worldwide.
              </p>
              <p className="text-xs opacity-75 mt-2 italic font-semibold">"Trust. Expertise. Growth."</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                    Accounting & Taxation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                    Auditing Services
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                    Compliance Services
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="opacity-75 hover:opacity-100 transition-opacity">
                    Advisory Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#about" className="opacity-75 hover:opacity-100 transition-opacity">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="opacity-75 hover:opacity-100 transition-opacity">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="opacity-75 hover:opacity-100 transition-opacity">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Regions */}
            <div>
              <h4 className="font-bold text-lg mb-4">Regions Served</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                    India Operations
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                    Offshore Services
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                    Global Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                    Cross-Border Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm opacity-75">&copy; 2026 EagleSwift Global Advisors. All rights reserved.</p>
              <p className="text-sm opacity-75 mt-4 md:mt-0">Trusted by businesses across India and globally</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
