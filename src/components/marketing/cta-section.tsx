import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function CtaSection() {
  return (
    <section id="contact" className="relative py-24 px-4">
      {/* Primary background */}
      <div className="absolute inset-0 -z-10 bg-primary" />
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Heading text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Streamline Your Operations?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Get started today and see how DumpsterPro can transform your waste
              management business. Fill out the form below and our team will
              reach out within 24 hours.
            </p>
          </div>

          {/* Lead form card */}
          <Card className="w-full max-w-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Get Started</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  aria-label="Phone"
                />
                <Input
                  type="text"
                  placeholder="Company Name"
                  aria-label="Company Name"
                />
                <Button type="submit" size="lg" className="mt-2 w-full">
                  Get Started
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
