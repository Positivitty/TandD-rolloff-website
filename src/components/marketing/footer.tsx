import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { label: "Dumpster Rental", href: "#pricing" },
      { label: "Waste Disposal", href: "#features" },
      { label: "Construction Cleanup", href: "#features" },
      { label: "Residential Cleanouts", href: "#features" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Service Areas", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Customer Login", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
}

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-icon.png"
                alt="T&D Rolloff"
                width={32}
                height={32}
                className="brightness-200 contrast-50"
              />
              <span className="text-lg font-bold tracking-tight">
                T&D Rolloff
              </span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Professional dumpster rental and waste disposal services.
              Serving homeowners, contractors, and businesses with reliable
              roll-off container delivery and pickup.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-background/60 transition-colors hover:bg-background/10 hover:text-background"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">{footerLinks.services.title}</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.services.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">{footerLinks.company.title}</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">{footerLinks.legal.title}</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.legal.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-background/20" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} T&D Rolloff. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-background/60 transition-colors hover:text-background"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-background/60 transition-colors hover:text-background"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
