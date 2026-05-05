import { ChevronRight } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden"
    aria-label="Hero section"
  >
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-primary-light/15 rounded-full blur-[100px]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Built for Nigerian Schools
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-secondary leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The smarter way to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            run your school.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-700 mb-10 leading-relaxed font-light">
          SchoolPilot is a mobile-first SaaS platform that eliminates paper-based result
          processing, automates attendance tracking, and gives parents real-time visibility
          into their child&apos;s academic performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            id="hero-cta-primary"
            className="w-full sm:w-auto px-8 py-4 bg-cta hover:bg-cta-hover text-white rounded-full font-semibold shadow-lg shadow-cta/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
          >
            Start Free Trial
            <ChevronRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#how-it-works"
            id="hero-cta-secondary"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-border rounded-full font-medium text-foreground transition-all duration-200 cursor-pointer shadow-sm"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {[
            { value: "30 mins", label: "Full school setup" },
            { value: "10 mins", label: "Scores for 40 students" },
            { value: "60 sec", label: "Bulk PDF generation" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                {stat.value}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 relative">
        <div className="bg-white rounded-2xl shadow-2xl shadow-slate-300/40 border border-border overflow-hidden max-w-5xl mx-auto">
          <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-slate-600 border border-border text-center">
              app.schoolpilot.ng
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-background min-h-[280px] sm:min-h-[380px] flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-semibold text-secondary text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                  Admin Dashboard
                </p>
                <p className="text-xs text-foreground-muted">2024/2025 Session · First Term</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-700">Term Active</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Students", value: "847", color: "bg-primary/10 text-primary" },
                { label: "Teachers", value: "42", color: "bg-purple-100 text-purple-700" },
                { label: "Classes", value: "18", color: "bg-orange-100 text-orange-700" },
                { label: "Results Published", value: "12", color: "bg-green-100 text-green-700" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-3 border border-border shadow-sm">
                  <p className={`text-xl font-bold ${item.color.split(" ")[1]}`} style={{ fontFamily: "var(--font-heading)" }}>
                    {item.value}
                  </p>
                  <p className="text-xs text-foreground-muted mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              <div className="bg-white rounded-xl border border-border shadow-sm p-4">
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">
                  Recent Result Submissions
                </p>
                <div className="space-y-2">
                  {[
                    { class: "JSS 1A", subject: "Mathematics", status: "Pending Review", color: "text-yellow-600 bg-yellow-50 border-yellow-200" },
                    { class: "SSS 2B", subject: "English Language", status: "Approved", color: "text-green-600 bg-green-50 border-green-200" },
                    { class: "JSS 3A", subject: "Physics", status: "Scores Entered", color: "text-blue-600 bg-blue-50 border-blue-200" },
                  ].map((row) => (
                    <div key={row.class + row.subject} className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-secondary">{row.class} · {row.subject}</p>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${row.color}`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl border border-border shadow-sm p-4">
                <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3">
                  Attendance Today
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { class: "JSS 1A", present: 35, total: 38 },
                    { class: "SSS 2B", present: 28, total: 30 },
                    { class: "Primary 4", present: 42, total: 45 },
                  ].map((row) => (
                    <div key={row.class}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-foreground">{row.class}</span>
                        <span className="font-medium text-secondary">{row.present}/{row.total}</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${(row.present / row.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 sm:right-8 bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-border px-4 py-3 hidden sm:block">
          <p className="text-xs text-foreground-muted">PDF Report Cards</p>
          <p className="text-lg font-bold text-secondary" style={{ fontFamily: "var(--font-heading)" }}>
            Generated in <span className="text-primary">60s</span>
          </p>
        </div>

        <div className="absolute -bottom-4 -left-4 sm:left-8 bg-secondary rounded-2xl shadow-lg px-4 py-3 hidden sm:block">
          <p className="text-xs text-slate-400">Parents notified</p>
          <p className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Real-time alerts
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
