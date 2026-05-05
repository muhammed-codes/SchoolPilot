const STEPS = [
  {
    step: "01",
    title: "School Onboards in 30 Minutes",
    description:
      "School Admin signs up and sets up the school profile — name, logo, stamp, school type. Then creates the academic session and terms (no fixed 3-term model — works exactly the way your school does).",
    details: ["School profile & branding", "Session & term configuration", "Grading system setup", "Score component defaults"],
  },
  {
    step: "02",
    title: "Classes, Subjects & Teachers Configured",
    description:
      "Admin creates classes (JSS 1A, Primary 3, KG 2, etc.) and assigns subjects. Each subject can be taught by the class teacher or a dedicated subject teacher — or a mix of both.",
    details: ["Create classes and assign class teachers", "Add subjects school-wide", "Assign subject teachers per class", "Flexible per-class configuration"],
  },
  {
    step: "03",
    title: "Students Added & Parents Linked",
    description:
      "Students are added manually or via bulk CSV import. Each student is linked to a parent account that receives notifications and can view results. One parent account covers multiple siblings.",
    details: ["Manual or bulk CSV import", "Admission number tracking", "Passport photo per student", "Parent account linking"],
  },
  {
    step: "04",
    title: "Teachers Enter Scores",
    description:
      "Each subject teacher logs in and sees only their assigned subjects. They enter CA, mid-term, assignment, and exam scores. The system auto-calculates totals, positions, and grades instantly.",
    details: ["Auto-grade calculation", "Auto-position ranking", "Save progress at any time", "Submit when complete"],
  },
  {
    step: "05",
    title: "Admin Reviews → Principal Approves",
    description:
      "Scores go to Admin review first, then Principal approval. Principal can approve or return with comments. Full audit trail on every change — timestamp and user identity logged.",
    details: ["Two-stage approval workflow", "Principal writes student remarks", "Return with comments", "Full audit trail"],
  },
  {
    step: "06",
    title: "Parents Notified. Results Published.",
    description:
      "Once the Principal approves, results are published instantly. Parents receive a push notification and can view and download the PDF report card directly on their phone.",
    details: ["Instant push notification", "View on mobile phone", "Download as PDF", "See attendance records"],
  },
];

const HowItWorksSection = () => (
  <section
    id="how-it-works"
    className="py-20 lg:py-28 bg-secondary text-white"
    aria-label="How it works"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-light mb-3">
          The Process
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          From setup to published results in 6 steps
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          SchoolPilot follows the natural flow of how schools already work — we just make it
          faster, digital, and fully audited.
        </p>
      </div>

      <div className="relative">
        <div
          className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent hidden sm:block"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-10">
          {STEPS.map((step, index) => (
            <div
              key={step.step}
              className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 ${
                index % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div
                className="absolute left-0 sm:left-1/2 w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-white text-sm border-4 border-secondary z-10 -translate-x-0 sm:-translate-x-1/2 hidden sm:flex"
                style={{ fontFamily: "var(--font-heading)" }}
                aria-hidden="true"
              >
                {step.step}
              </div>

              <div
                className={`sm:w-[calc(50%-3.5rem)] ${
                  index % 2 === 1 ? "sm:text-right" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-1 sm:hidden">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white text-xs flex-shrink-0" style={{ fontFamily: "var(--font-heading)" }}>
                    {step.step}
                  </div>
                </div>
                <div className="bg-dark-surface rounded-2xl border border-dark-border p-6">
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{step.description}</p>
                  <ul className={`flex flex-col gap-1.5 ${index % 2 === 1 ? "sm:items-end" : ""}`}>
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        <span className="text-xs text-slate-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden sm:block sm:w-[calc(50%-3.5rem)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
