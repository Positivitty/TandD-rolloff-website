import { ArrowRight, Truck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trustIndicators = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient / pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_60%,hsl(var(--background)))]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="secondary" className="mb-6 px-3 py-1 text-sm">
              <Truck className="size-3.5 mr-1" />
              Trusted by 500+ waste businesses
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Simplify Your{" "}
              <span className="text-primary">Waste Management</span>{" "}
              Operations
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              The all-in-one platform that streamlines your dumpster rental
              business with automated billing, intelligent route optimization,
              and a self-service customer portal -- so you can focus on growing
              your operation, not managing it.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Start Free Trial
                <ArrowRight className="size-4 ml-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Watch Demo
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

          {/* Right column - dashboard mockup placeholder */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 shadow-2xl shadow-primary/5">
              {/* Mockup top bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-400/70" />
                  <div className="size-3 rounded-full bg-yellow-400/70" />
                  <div className="size-3 rounded-full bg-green-400/70" />
                </div>
                <div className="ml-2 h-5 w-48 rounded-md bg-muted/60" />
              </div>

              {/* Mockup sidebar + main content */}
              <div className="flex gap-4">
                {/* Sidebar */}
                <div className="hidden sm:flex w-28 flex-col gap-2">
                  <div className="h-6 w-full rounded-md bg-primary/20" />
                  <div className="h-6 w-full rounded-md bg-muted/40" />
                  <div className="h-6 w-full rounded-md bg-muted/40" />
                  <div className="h-6 w-full rounded-md bg-muted/40" />
                  <div className="h-6 w-20 rounded-md bg-muted/40" />
                </div>

                {/* Main content area */}
                <div className="flex-1 flex flex-col gap-3">
                  {/* Stat cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-border/40 bg-background/60 p-3">
                      <div className="h-2.5 w-10 rounded bg-muted/60 mb-2" />
                      <div className="h-5 w-14 rounded bg-primary/30" />
                    </div>
                    <div className="rounded-lg border border-border/40 bg-background/60 p-3">
                      <div className="h-2.5 w-12 rounded bg-muted/60 mb-2" />
                      <div className="h-5 w-10 rounded bg-primary/20" />
                    </div>
                    <div className="rounded-lg border border-border/40 bg-background/60 p-3">
                      <div className="h-2.5 w-8 rounded bg-muted/60 mb-2" />
                      <div className="h-5 w-12 rounded bg-primary/25" />
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="rounded-lg border border-border/40 bg-background/60 p-4">
                    <div className="h-2.5 w-20 rounded bg-muted/60 mb-3" />
                    <div className="flex items-end gap-1.5 h-24">
                      <div className="flex-1 rounded-t bg-primary/15 h-[40%]" />
                      <div className="flex-1 rounded-t bg-primary/25 h-[60%]" />
                      <div className="flex-1 rounded-t bg-primary/20 h-[45%]" />
                      <div className="flex-1 rounded-t bg-primary/35 h-[75%]" />
                      <div className="flex-1 rounded-t bg-primary/30 h-[65%]" />
                      <div className="flex-1 rounded-t bg-primary/40 h-[85%]" />
                      <div className="flex-1 rounded-t bg-primary/45 h-full" />
                    </div>
                  </div>

                  {/* Table placeholder rows */}
                  <div className="rounded-lg border border-border/40 bg-background/60 p-3 flex flex-col gap-2">
                    <div className="flex gap-3">
                      <div className="h-3 w-16 rounded bg-muted/50" />
                      <div className="h-3 w-24 rounded bg-muted/50" />
                      <div className="h-3 flex-1 rounded bg-muted/30" />
                      <div className="h-3 w-12 rounded bg-primary/20" />
                    </div>
                    <div className="flex gap-3">
                      <div className="h-3 w-16 rounded bg-muted/40" />
                      <div className="h-3 w-24 rounded bg-muted/40" />
                      <div className="h-3 flex-1 rounded bg-muted/25" />
                      <div className="h-3 w-12 rounded bg-primary/15" />
                    </div>
                    <div className="flex gap-3">
                      <div className="h-3 w-16 rounded bg-muted/35" />
                      <div className="h-3 w-24 rounded bg-muted/35" />
                      <div className="h-3 flex-1 rounded bg-muted/20" />
                      <div className="h-3 w-12 rounded bg-primary/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow behind the mockup */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
