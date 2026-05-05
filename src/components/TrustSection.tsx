import {
  Wifi,
  Lock,
  FileCheck,
  Smartphone,
} from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Smartphone,
    title: "iOS & Android",
    description: "Native mobile app. Works on iOS 14+ and Android 8.0+. One codebase, consistent experience.",
  },
  {
    icon: Wifi,
    title: "Offline-first",
    description: "Score entry and attendance work without internet. Data syncs when connectivity returns.",
  },
  {
    icon: Lock,
    title: "School Data Isolation",
    description: "Every school's data is fully isolated. No user from one school can access another school's records.",
  },
  {
    icon: FileCheck,
    title: "Full Audit Trail",
    description: "Every score change, approval decision, and attendance edit is logged with timestamp and user identity.",
  },
];

const TrustSection = () => (
  <section
    id="trust"
    className="py-16 bg-white border-y border-border"
    aria-label="Platform trust and security"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TRUST_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3
                className="font-semibold text-secondary text-base"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TrustSection;
