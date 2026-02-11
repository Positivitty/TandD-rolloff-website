import { ArrowRight, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const trustIndicators = [
  "Same-day delivery available",
  "Flexible rental periods",
  "Competitive pricing",
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient / pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/0.15,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_60%,var(--color-background))]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-foreground) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="secondary" className="mb-6 px-3 py-1 text-sm">
              Serving the Local Community
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Reliable{" "}
              <span className="text-primary">Dumpster Rental</span>{" "}
              & Waste Disposal
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Need a dumpster for your next project? T&D Rolloff makes it easy
              to rent roll-off containers for construction, renovation,
              cleanouts, and more. Order online, schedule delivery, and pay —
              all from your account.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <a href="#contact">
                  Request a Dumpster
                  <ArrowRight className="size-4 ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <a href="tel:+15551234567">
                  <Phone className="size-4 mr-1" />
                  Call Us Today
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - dumpster sizes visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 shadow-2xl shadow-primary/5">
              <h3 className="text-lg font-semibold mb-4">Available Sizes</h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border/40 bg-background/60 p-4 text-center">
                  <div className="text-3xl font-bold text-primary">10</div>
                  <div className="text-sm text-muted-foreground">Yard</div>
                  <div className="mt-1 text-xs text-muted-foreground">Small cleanouts</div>
                </div>
                <div className="rounded-lg border border-border/40 bg-background/60 p-4 text-center">
                  <div className="text-3xl font-bold text-primary">20</div>
                  <div className="text-sm text-muted-foreground">Yard</div>
                  <div className="mt-1 text-xs text-muted-foreground">Renovations</div>
                </div>
                <div className="rounded-lg border border-border/40 bg-background/60 p-4 text-center">
                  <div className="text-3xl font-bold text-primary">30</div>
                  <div className="text-sm text-muted-foreground">Yard</div>
                  <div className="mt-1 text-xs text-muted-foreground">Construction</div>
                </div>
                <div className="rounded-lg border border-border/40 bg-background/60 p-4 text-center">
                  <div className="text-3xl font-bold text-primary">40</div>
                  <div className="text-sm text-muted-foreground">Yard</div>
                  <div className="mt-1 text-xs text-muted-foreground">Large projects</div>
                </div>
              </div>

              <Button asChild className="w-full mt-4" variant="outline">
                <a href="#pricing">View Pricing & Details</a>
              </Button>
            </div>

            {/* Decorative glow behind the card */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
