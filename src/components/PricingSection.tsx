import { CheckCircle, XCircle } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for small schools",
    price: "Contact Us",
    priceNote: "Custom pricing for your school size",
    highlight: false,
    features: [
      { label: "Up to 200 students", included: true },
      { label: "Unlimited teachers", included: true },
      { label: "Result management", included: true },
      { label: "PDF report card generation", included: true },
      { label: "Student & staff attendance", included: true },
      { label: "Parent mobile access", included: true },
      { label: "Bulk CSV student import", included: false },
      { label: "Custom report card templates", included: false },
      { label: "Priority support", included: false },
    ],
    cta: "Get in Touch",
  },
  {
    name: "School",
    tagline: "For growing schools",
    price: "Contact Us",
    priceNote: "Per school · Billed annually",
    highlight: true,
    features: [
      { label: "Up to 1,000 students", included: true },
      { label: "Unlimited teachers", included: true },
      { label: "Result management", included: true },
      { label: "PDF report card generation", included: true },
      { label: "Student & staff attendance", included: true },
      { label: "Parent mobile access", included: true },
      { label: "Bulk CSV student import", included: true },
      { label: "Custom report card templates", included: true },
      { label: "Priority support", included: false },
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    tagline: "For large schools & groups",
    price: "Contact Us",
    priceNote: "Custom — up to 3,000+ students",
    highlight: false,
    features: [
      { label: "3,000+ students", included: true },
      { label: "Unlimited teachers", included: true },
      { label: "Result management", included: true },
      { label: "PDF report card generation", included: true },
      { label: "Student & staff attendance", included: true },
      { label: "Parent mobile access", included: true },
      { label: "Bulk CSV student import", included: true },
      { label: "Custom report card templates", included: true },
      { label: "Dedicated priority support", included: true },
    ],
    cta: "Talk to Sales",
  },
];

const PricingSection = () => (
  <section
    id="pricing"
    className="py-20 lg:py-28 bg-background"
    aria-label="Pricing"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Pricing
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Simple, school-friendly pricing
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Schools subscribe as an organisation. One account, all your staff and students.
          No per-user fees. No hidden charges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border flex flex-col ${
              plan.highlight
                ? "bg-secondary border-secondary shadow-2xl shadow-secondary/20 scale-[1.02]"
                : "bg-white border-border shadow-sm"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
                  Most Popular
                </span>
              </div>
            )}

            <div className={`p-6 pb-5 border-b ${plan.highlight ? "border-slate-700" : "border-border"}`}>
              <h3
                className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-secondary"}`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {plan.name}
              </h3>
              <p className={`text-sm mb-5 ${plan.highlight ? "text-slate-400" : "text-foreground-muted"}`}>
                {plan.tagline}
              </p>
              <div>
                <p
                  className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-secondary"}`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {plan.price}
                </p>
                <p className={`text-xs mt-1 ${plan.highlight ? "text-slate-400" : "text-foreground-subtle"}`}>
                  {plan.priceNote}
                </p>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col gap-5">
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle
                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    ) : (
                      <XCircle
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-slate-600" : "text-slate-300"}`}
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? plan.highlight ? "text-slate-200" : "text-foreground-muted"
                          : plan.highlight ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                id={`pricing-cta-${plan.name.toLowerCase()}`}
                className={`mt-auto block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  plan.highlight
                    ? "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30"
                    : "bg-slate-100 hover:bg-slate-200 text-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-foreground-muted mt-10">
        All plans include iOS & Android apps, offline support, and data isolation.
        <br />
        Billing & subscription management is available upon onboarding.
      </p>
    </div>
  </section>
);

export default PricingSection;
