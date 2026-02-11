import { ClipboardList, Truck, CircleCheckBig } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Request a Dumpster",
    description:
      "Choose your dumpster size, pick your dates, and submit your order online or give us a call.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "We Deliver",
    description:
      "We drop off the container at your location on the scheduled date, ready for you to fill up.",
    icon: Truck,
  },
  {
    number: "03",
    title: "We Pick Up",
    description:
      "When you're done or your rental period ends, we haul it away and handle the disposal for you.",
    icon: CircleCheckBig,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Renting a dumpster with T&D Rolloff is quick and easy
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute top-16 left-[16.67%] right-[16.67%] hidden border-t-2 border-dashed border-primary/30 md:block"
          />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="relative z-10 mb-6 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">
                  {step.number}
                </span>
                <step.icon className="mt-1 h-8 w-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>

              {/* Description */}
              <p className="max-w-xs text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
