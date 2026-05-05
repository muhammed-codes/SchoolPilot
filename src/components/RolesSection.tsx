import { UserCog, GraduationCap, Layers, CheckCircle } from "lucide-react";

const ROLES = [
  {
    icon: UserCog,
    role: "School Admin",
    tagline: "Total control of your school",
    capabilities: [
      "Create sessions, terms, classes & subjects",
      "Assign teachers to classes and subjects",
      "Bulk-import students from CSV",
      "Review scores before principal approval",
      "Generate & export bulk PDF report cards",
      "Run end-of-session student promotions",
    ],
    color: "bg-primary text-white",
    accent: "border-primary/20 bg-primary/5",
  },
  {
    icon: GraduationCap,
    role: "Principal",
    tagline: "Review, approve, and sign off",
    capabilities: [
      "View full class results on one screen",
      "Write personalised remarks per student",
      "Approve or return results with comments",
      "Oversee all academic activity across terms",
    ],
    color: "bg-purple-600 text-white",
    accent: "border-purple-200 bg-purple-50",
  },
  {
    icon: Layers,
    role: "Subject / Class Teacher",
    tagline: "Fast, focused score entry",
    capabilities: [
      "See only assigned classes and subjects",
      "Enter CA, mid-term, assignment & exam scores",
      "System auto-calculates totals and grades",
      "Mark class attendance in under 3 minutes",
      "Clock in/out via QR code for staff attendance",
      "Add per-student remarks on your subject",
    ],
    color: "bg-orange-500 text-white",
    accent: "border-orange-200 bg-orange-50",
  },
];

const RolesSection = () => (
  <section
    id="roles"
    className="py-20 lg:py-28 bg-background"
    aria-label="User roles"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Role-based Access
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Everyone sees exactly what they need
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          SchoolPilot has five distinct access levels. Each user only sees and can do
          exactly what their role allows — keeping your data secure and your workflows clean.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ROLES.map((role) => {
          const Icon = role.icon;
          return (
            <div
              key={role.role}
              className={`rounded-2xl border p-6 flex flex-col gap-5 ${role.accent}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${role.color} shadow-sm`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="font-bold text-secondary text-base"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {role.role}
                  </h3>
                  <p className="text-xs text-foreground-muted">{role.tagline}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2.5">
                {role.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5">
                    <CheckCircle
                      className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-700 leading-snug">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            role: "Parent / Guardian",
            tagline: "Real-time visibility into your child's performance",
            capabilities: [
              "Receive push notifications when results are published",
              "View and download PDF report cards on your phone",
              "See attendance records for your child",
              "One account for multiple children (siblings)",
            ],
            color: "bg-teal-600 text-white",
            accent: "border-teal-200 bg-teal-50",
            icon: "👨‍👩‍👧",
          },
          {
            role: "Super Admin (Platform)",
            tagline: "Manage the entire SchoolPilot platform",
            capabilities: [
              "View all registered school accounts",
              "Onboard, deactivate or suspend school accounts",
              "Access any school's data in read-only mode for support",
              "View platform-wide stats and activity logs",
            ],
            color: "bg-secondary text-white",
            accent: "border-slate-200 bg-slate-50",
            icon: "🏢",
          },
        ].map((role) => (
          <div
            key={role.role}
            className={`rounded-2xl border p-6 flex flex-col gap-5 ${role.accent}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${role.color} shadow-sm text-xl`}>
                {role.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-secondary text-base"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {role.role}
                </h3>
                <p className="text-xs text-foreground-muted">{role.tagline}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-2.5">
              {role.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5">
                  <CheckCircle
                    className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-700 leading-snug">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RolesSection;
