import { UserPlus, Settings, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description:
      "Create your account and set up your business profile in minutes",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Add your fleet, set service areas, pricing, and billing preferences",
    icon: Settings,
  },
  {
    number: "03",
    title: "Start Managing",
    description:
      "Begin dispatching, billing, and managing customers right away",
    icon: Rocket,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Started in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From sign-up to your first dispatch in no time
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
