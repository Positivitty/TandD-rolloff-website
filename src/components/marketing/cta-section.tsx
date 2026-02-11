"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function CtaSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire up to a server action or API route
    setSubmitted(true)
  }
  return (
    <section id="contact" className="relative py-24 px-4">
      {/* Primary background */}
      <div className="absolute inset-0 -z-10 bg-primary" />
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-primary-foreground) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Heading text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Rent a Dumpster?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Fill out the form below and our team will get back to you within
              24 hours with a quote. Or give us a call for immediate assistance.
            </p>
          </div>

          {/* Contact form card */}
          <Card className="w-full max-w-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="text-lg font-semibold">Thank you!</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    aria-label="Name"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    aria-label="Email"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    aria-label="Phone"
                  />
                  <Input
                    type="text"
                    name="address"
                    placeholder="Project Address"
                    aria-label="Project Address"
                  />
                  <Textarea
                    name="details"
                    placeholder="Tell us about your project (size needed, timeline, etc.)"
                    aria-label="Project details"
                    rows={3}
                  />
                  <Button type="submit" size="lg" className="mt-2 w-full">
                    Get a Quote
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
