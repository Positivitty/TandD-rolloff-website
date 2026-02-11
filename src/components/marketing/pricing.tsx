import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PricingTier {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    description: "For small operations",
    features: [
      "Up to 10 trucks",
      "Basic billing",
      "Customer portal",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$199",
    period: "/mo",
    description: "For growing businesses",
    features: [
      "Up to 50 trucks",
      "Advanced billing & ACH",
      "Route optimization",
      "Priority support",
      "Custom branding",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large fleets",
    features: [
      "Unlimited trucks",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Get Started",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.popular
                  ? "relative border-primary shadow-lg lg:scale-105"
                  : "relative"
              }
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground">{tier.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
