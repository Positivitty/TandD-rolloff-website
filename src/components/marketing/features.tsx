import {
  ShoppingCart,
  CreditCard,
  Truck,
  Calendar,
  MapPin,
  Mail,
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
    icon: ShoppingCart,
    title: "Easy Online Ordering",
    description:
      "Browse dumpster sizes, choose your rental dates, and place your order online — no phone call needed.",
  },
  {
    icon: CreditCard,
    title: "Online Payments",
    description:
      "Pay your invoices securely online through your customer account. We accept ACH bank transfers for hassle-free billing.",
  },
  {
    icon: Truck,
    title: "Fast Delivery & Pickup",
    description:
      "We deliver your dumpster on time and pick it up when you're done. Same-day delivery available in our service area.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Choose the delivery date and rental period that works for your project. Extend your rental anytime from your account.",
  },
  {
    icon: MapPin,
    title: "Track Your Container",
    description:
      "Log in to your account to check your order status, see delivery details, and know exactly when to expect pickup.",
  },
  {
    icon: Mail,
    title: "Get in Touch Anytime",
    description:
      "Have questions? Send us a message through the website, call us, or email. Our team is here to help with any request.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose T&D Rolloff?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We make renting a dumpster simple. Order online, manage your
            account, and pay — all in one place.
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
