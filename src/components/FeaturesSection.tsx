import {
  ClipboardList,
  UserCheck,
  FileText,
  ShieldCheck,
  Bell,
  Users,
  BarChart3,
  Upload,
} from "lucide-react";

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Result Management",
    description:
      "Create result sheets per class per term. Teachers enter CA, mid-term, and exam scores. System auto-calculates totals and grades instantly.",
    highlight: "Core Feature",
  },
  {
    icon: ShieldCheck,
    title: "Approval Workflow",
    description:
      "Results go through a two-stage approval — Admin review then Principal approval — before parents can see them. Complete audit trail on every action.",
    highlight: "Integrity Built-in",
  },
  {
    icon: UserCheck,
    title: "Attendance Tracking",
    description:
      "Class teachers mark student attendance in under 3 minutes. Staff attendance via QR code clock-in/out. All data feeds directly into report cards.",
    highlight: "< 3 mins",
  },
  {
    icon: FileText,
    title: "PDF Report Cards",
    description:
      "Bulk-generate beautifully formatted PDF report cards for an entire class in under 60 seconds. Includes school logo, stamp, and Principal remarks.",
    highlight: "60 sec bulk export",
  },
  {
    icon: Users,
    title: "Role-based Access",
    description:
      "Granular permissions for School Admin, Principal, Class Teacher, Subject Teacher, and Parent. Every user sees exactly what they need — nothing more.",
    highlight: "5 distinct roles",
  },
  {
    icon: Bell,
    title: "Parent Notifications",
    description:
      "Parents receive real-time push notifications when results are published. View and download report cards directly on their phone without visiting the school.",
    highlight: "Real-time alerts",
  },
  {
    icon: Upload,
    title: "Bulk Student Import",
    description:
      "Import hundreds of students via CSV in minutes. System validates each row, flags errors with clear messages, and imports valid entries automatically.",
    highlight: "CSV / Excel",
  },
  {
    icon: BarChart3,
    title: "Flexible Grading Systems",
    description:
      "Support for Nigerian WAEC/NECO style, percentage-based, letter grades (A–F), and GPA/5.0 scale — all configurable per school and per result sheet.",
    highlight: "4 grading systems",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  highlight,
}: (typeof FEATURES)[number]) => (
  <div className="group relative bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-default flex flex-col gap-4">
    <div className="flex items-start justify-between">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
        {highlight}
      </span>
    </div>
    <div>
      <h3
        className="text-base font-semibold text-secondary mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-slate-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => (
  <section id="features" className="py-20 lg:py-28 bg-white" aria-label="Features">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
          Everything You Need
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Built for how Nigerian schools actually work
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          From score entry to parent notification, SchoolPilot handles the full academic
          lifecycle — with the flexibility to match your school&apos;s structure, not ours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
