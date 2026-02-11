import {
  CreditCard,
  Truck,
  Users,
  Calendar,
  MapPin,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: CreditCard,
    title: "Automatic Billing",
    description:
      "Streamline revenue with ACH payments, automatic invoicing, and recurring billing — so you never chase a payment again.",
  },
  {
    icon: Truck,
    title: "Route Optimization",
    description:
      "Save time and fuel with GPS tracking, optimized delivery routes, and real-time dispatch for every truck in your fleet.",
  },
  {
    icon: Users,
    title: "Customer Portal",
    description:
      "Give customers a self-service portal for online payments, order tracking, and scheduling — reducing calls and boosting satisfaction.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Drag-and-drop calendar with built-in availability management makes it easy to schedule pickups, deliveries, and swaps.",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description:
      "Know where every dumpster and driver is in real time with live fleet tracking and automatic delivery confirmations.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "Manage your entire operation on the go. Drivers get a dedicated mobile app for routes, status updates, and customer signatures.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Run Your Business
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From scheduling to billing, DumpsterPro gives you the tools to
            manage your waste hauling operation in one place.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className="transition-shadow duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base font-bold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
