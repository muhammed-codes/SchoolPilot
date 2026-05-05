const FAQS = [
  {
    q: "Does SchoolPilot work offline?",
    a: "Yes. Score entry and attendance marking work offline. Data syncs automatically to the server once connectivity is restored — critical for schools with poor internet access.",
  },
  {
    q: "Can we use our own grading system?",
    a: "Absolutely. SchoolPilot supports Nigerian WAEC/NECO style (A1–F9), percentage-based, letter grades (A–F with customisable ranges), and GPA/5.0 scale. The school admin sets a default, and teachers can override per result sheet.",
  },
  {
    q: "How does the approval workflow work?",
    a: "Results go through two stages: (1) Admin reviews all scores for data entry errors, then (2) the Principal reviews and approves the full class result before it's published to parents. The Principal can return results with comments at any stage.",
  },
  {
    q: "Can we import existing student data?",
    a: "Yes. Download our CSV template, fill it with your student data (name, DOB, gender, admission number, class, parent phone), and upload. The system validates each row and flags errors — valid rows import instantly.",
  },
  {
    q: "Is student data isolated between schools?",
    a: "Completely. Each school gets its own isolated environment. No user from School A can ever access School B's data under any circumstances.",
  },
  {
    q: "What devices does SchoolPilot run on?",
    a: "SchoolPilot is built for mobile — iOS (14+) and Android (8.0+). Parents, teachers, admins, and the Principal all access the app on their phones. Built with React Native for a native experience on both platforms.",
  },
  {
    q: "How quickly are PDF report cards generated?",
    a: "Bulk PDF generation for an entire class completes in under 60 seconds. Report cards are generated server-side (not on-device) to ensure consistent rendering regardless of the phone used.",
  },
  {
    q: "Can one parent account cover multiple children?",
    a: "Yes. One parent account can be linked to multiple children (e.g. siblings in the same school). Parents switch between their children's profiles within a single login.",
  },
];

const FAQSection = () => (
  <section
    id="faq"
    className="py-20 lg:py-28 bg-white"
    aria-label="Frequently asked questions"
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          FAQ
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-secondary mb-5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Common questions answered
        </h2>
        <p className="text-lg text-slate-700">
          Still have questions? Reach us at{" "}
          <a
            href="mailto:hello@schoolpilot.ng"
            className="text-primary hover:text-primary-dark transition-colors underline underline-offset-2"
          >
            hello@schoolpilot.ng
          </a>
        </p>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {FAQS.map((faq) => (
          <details
            key={faq.q}
            className="group py-5 cursor-pointer"
          >
            <summary className="flex items-center justify-between gap-4 list-none cursor-pointer">
              <span
                className="font-semibold text-secondary text-base group-open:text-primary transition-colors duration-200"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {faq.q}
              </span>
              <span
                className="w-6 h-6 rounded-full bg-slate-100 group-open:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                aria-hidden="true"
              >
                <svg
                  className="w-3 h-3 text-foreground-muted group-open:text-primary group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed pr-10">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
