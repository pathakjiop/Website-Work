"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-primary">EagleSwift</span>
              <p className="text-xs text-muted-foreground leading-none">Global Advisors</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/consultation"
            className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
          >
            Schedule Call
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border">
            <Link
              href="#services"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Terms & Conditions
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
