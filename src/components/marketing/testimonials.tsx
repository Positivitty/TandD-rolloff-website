import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "T&D Rolloff made my home renovation so much easier. Ordered a 20-yard dumpster online, it was delivered the next morning, and pickup was right on schedule. Super smooth experience.",
    author: "Mike R.",
    role: "Homeowner",
  },
  {
    quote:
      "We use T&D for all our job sites. The online ordering and billing saves us a ton of time, and they always deliver on schedule. Best dumpster rental service we've worked with.",
    author: "Sarah T.",
    role: "General Contractor",
  },
  {
    quote:
      "I was cleaning out my parents' estate and had no idea what size dumpster I needed. The team helped me pick the right one, delivered it same-day, and the price was very fair.",
    author: "James D.",
    role: "Homeowner",
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
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See why homeowners and contractors trust T&D Rolloff
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
