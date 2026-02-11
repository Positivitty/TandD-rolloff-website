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

interface DumpsterSize {
  name: string
  yards: string
  price: string
  period: string
  description: string
  details: string[]
  popular?: boolean
}

const sizes: DumpsterSize[] = [
  {
    name: "10 Yard",
    yards: "10",
    price: "$300",
    period: "per rental",
    description: "Perfect for small cleanouts",
    details: [
      "Holds ~3 pickup truck loads",
      "Garage & basement cleanouts",
      "Small remodeling projects",
      "Up to 7-day rental included",
    ],
  },
  {
    name: "20 Yard",
    yards: "20",
    price: "$400",
    period: "per rental",
    description: "Great for mid-size projects",
    details: [
      "Holds ~6 pickup truck loads",
      "Kitchen & bathroom renovations",
      "Roof tear-offs (single layer)",
      "Up to 7-day rental included",
    ],
    popular: true,
  },
  {
    name: "30 Yard",
    yards: "30",
    price: "$500",
    period: "per rental",
    description: "Ideal for construction jobs",
    details: [
      "Holds ~9 pickup truck loads",
      "New construction debris",
      "Large home renovations",
      "Up to 7-day rental included",
    ],
  },
  {
    name: "40 Yard",
    yards: "40",
    price: "$600",
    period: "per rental",
    description: "For the biggest projects",
    details: [
      "Holds ~12 pickup truck loads",
      "Commercial demolition",
      "Major construction projects",
      "Up to 7-day rental included",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Dumpster Sizes & Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the right size for your project. All rentals include delivery,
            pickup, and disposal.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sizes.map((size) => (
            <Card
              key={size.name}
              className={
                size.popular
                  ? "relative border-primary shadow-lg lg:scale-105"
                  : "relative"
              }
            >
              {size.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl">{size.name}</CardTitle>
                <CardDescription>{size.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold tracking-tight">
                    {size.price}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    {size.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="flex flex-col gap-3">
                  {size.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={size.popular ? "default" : "outline"}
                >
                  <a href="#contact">Order Now</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
