import Link from "next/link"
import { Trash2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
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
              <Trash2 className="h-6 w-6" />
              <span className="text-lg font-bold tracking-tight">
                DumpsterPro
              </span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              The all-in-one platform for modern waste management businesses.
              Streamline operations, delight customers, and grow your business.
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

          {/* Product column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">{footerLinks.product.title}</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.product.links.map((link) => (
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
            &copy; {new Date().getFullYear()} DumpsterPro. All rights reserved.
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
