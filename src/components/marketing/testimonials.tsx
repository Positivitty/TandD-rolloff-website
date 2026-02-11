import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "T&D Rolloff completely transformed how we run our business. Scheduling used to take hours each morning - now it takes minutes. Our drivers love the app too.",
    author: "Mike Reeves",
    role: "Owner, Reeves Waste Solutions",
  },
  {
    quote:
      "We went from spreadsheets and sticky notes to a fully automated workflow. Billing errors dropped to nearly zero and our revenue is up 30% since switching.",
    author: "Sarah Thornton",
    role: "Operations Manager, CleanHaul Services",
  },
  {
    quote:
      "The customer portal alone is worth the price. Our clients can schedule pickups and pay invoices online, which cut our phone volume in half. Incredible platform.",
    author: "James Delgado",
    role: "Co-Founder, Metro Dumpster Co.",
  },
]

function StarRating() {
  return (
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Waste Management Professionals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See why businesses trust T&D Rolloff to run their operations
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="transition-shadow hover:shadow-md"
            >
              <CardContent className="pt-2">
                <StarRating />
                <blockquote className="mb-6 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
