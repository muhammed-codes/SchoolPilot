import { ChevronRight } from "lucide-react";

const CTASection = () => (
  <section
    id="contact"
    className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-secondary"
    aria-label="Call to action"
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
        <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-white">
          Free Trial Available
        </span>
      </div>

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Ready to modernise your school&apos;s operations?
      </h2>
      <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
        Join schools across Nigeria that have eliminated paper-based result processing
        and given parents real-time access to their children&apos;s performance.
        Set up your entire school in under 30 minutes.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="mailto:hello@schoolpilot.ng"
          id="final-cta-primary"
          className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-primary rounded-full font-semibold shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
        >
          Start Free Trial
          <ChevronRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
        <a
          href="mailto:hello@schoolpilot.ng"
          id="final-cta-secondary"
          className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-medium transition-all duration-200 cursor-pointer"
        >
          Schedule a Demo
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { value: "30 min", label: "Average school setup time" },
          { value: "0 paper", label: "Required after onboarding" },
          { value: "100%", label: "Mobile — iOS & Android" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="text-3xl font-bold text-white mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {stat.value}
            </p>
            <p className="text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CTASection;
