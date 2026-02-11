"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { label: "Services", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Sizes & Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-icon.png"
            alt="T&D Rolloff"
            width={36}
            height={36}
            className="dark:brightness-200 dark:contrast-50"
          />
          <span className="text-lg font-bold tracking-tight">T&D Rolloff</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right side actions */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <a href="/login">
              <LogIn className="size-4 mr-1" />
              Log In
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Request a Dumpster</a>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 pt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/logo-icon.png"
                    alt="T&D Rolloff"
                    width={36}
                    height={36}
                    className="dark:brightness-200 dark:contrast-50"
                  />
                  <span className="text-lg font-bold tracking-tight">
                    T&D Rolloff
                  </span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <Button asChild variant="outline" className="w-full">
                  <a href="/login" onClick={() => setMobileOpen(false)}>
                    <LogIn className="size-4 mr-1" />
                    Log In
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    Request a Dumpster
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
