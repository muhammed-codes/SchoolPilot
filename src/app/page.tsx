import React from 'react';
import { ChevronRight, LayoutDashboard, ShieldCheck, FileText } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] -z-10" />
      
      {/* Navbar Overlay */}
      <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center max-w-7xl mx-auto w-full z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">SchoolPilot</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="bg-glass-button backdrop-blur-sm border border-glass-border shadow-md shadow-glass-shadow hover:bg-white hover:-translate-y-px transition-all duration-200 px-5 py-2 rounded-full text-sm font-medium text-foreground cursor-pointer">
            Get Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center z-10 mt-16 sm:mt-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-glass backdrop-blur-md border border-secondary/30 shadow-md shadow-glass-shadow mb-8">
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">v2.0 Now Available</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Manage your school <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            with absolute clarity.
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-foreground/70 mb-10 leading-relaxed font-light">
          SchoolPilot brings administration, grading, and permissions into one modern, 
          beautifully designed ecosystem. Leave the clutter behind.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-cta hover:bg-cta-hover text-white rounded-full font-semibold shadow-lg shadow-cta/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer">
            Start Free Trial
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-glass backdrop-blur-md border border-glass-border rounded-full font-medium text-foreground hover:bg-white/80 transition-all cursor-pointer">
            View Features
          </button>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mt-24 mb-16 z-10">
        {[
          {
            icon: <LayoutDashboard className="w-6 h-6 text-primary" />,
            title: "Result Management",
            desc: "Flawless score entry, grading, and automated report generation."
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "Role-based Access",
            desc: "Granular control for Principals, Teachers, and Admins natively built-in."
          },
          {
            icon: <FileText className="w-6 h-6 text-primary" />,
            title: "Bulk Operations",
            desc: "Generate ID cards and export massive PDFs in seconds without breaking a sweat."
          }
        ].map((feat, i) => (
          <div key={i} className="bg-glass backdrop-blur-md border border-glass-border shadow-lg shadow-glass-shadow p-8 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shadow-glass-shadow mb-5 border border-primary/10">
              {feat.icon}
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto py-8 flex flex-col sm:flex-row justify-between items-center z-10 border-t border-primary/10 text-sm text-foreground/50">
        <p>© 2026 SchoolPilot. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </footer>
    </main>
  );
}
