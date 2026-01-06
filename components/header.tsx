"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Function to handle smooth scrolling to sections
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    // Close mobile menu if open
    setIsOpen(false)
    
    // If on a different page (like /privacy or /terms), navigate first
    if (sectionId.startsWith('/')) {
      window.location.href = sectionId
      return
    }
    
    // For section IDs on the same page
    const element = document.getElementById(sectionId.replace('#', ''))
    
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else if (sectionId === '#') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
          >
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
            <a 
              href="#services" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => handleScrollToSection(e, '#services')}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => handleScrollToSection(e, '#about')}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => handleScrollToSection(e, '#contact')}
            >
              Contact
            </a>
            <Link 
              href="/privacy" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </nav>

          {/* CTA Button - Updated to scroll to contact */}
          <button 
            className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
            }}
          >
            Schedule Call
          </button>

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
            <a
              href="#services"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              onClick={(e) => handleScrollToSection(e, '#services')}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              onClick={(e) => handleScrollToSection(e, '#about')}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
              onClick={(e) => handleScrollToSection(e, '#contact')}
            >
              Contact
            </a>
            <Link
              href="/privacy"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Terms & Conditions
            </Link>
            
            {/* Mobile CTA Button */}
            <button 
              className="w-full mt-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
              onClick={() => {
                setIsOpen(false)
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  setTimeout(() => {
                    contactSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                  }, 100)
                }
              }}
            >
              Schedule Call
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}