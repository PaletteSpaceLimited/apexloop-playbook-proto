import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

const freeFeatures = [
  "6 Free AI Roleplay Bots, Limited to Cold, Warm, & Discovery Calls",
  "Video Calls",
  "Full Transcription of Calls",
  "AI Coaching Feedback",
  "Objection & Question Detection",
  "Unlimited Call Time",
  "Call History for your Company",
];

const customFeatures = [
  "Everything in Free Package",
  "AI Scorecard Builder",
  "Unlimited Custom AI Scorecards",
  "Unlimited AI Roleplay Bots, Excluding Demo & Post-Sales Calls",
  "LMS / CMS Integration",
  "AI Real Call Scoring",
  "Multilingual Support (25+ Languages and More on Request)",
  "AI Bot Builder",
  "Custom Analytics & Reporting",
  "Product Demo Calls",
  "Post-Sales Calls",
  "Internal Single Sign-On (SSO)",
  "Advanced Security Configurations",
  "25+ Integrations & Custom Integrations at Request",
  "Multitenancy",
  "Professional Services",
  "Advanced Data Exports with API",
  "Simulated Auto-Dialer",
  "Learning Modules",
  "Internal Gamification",
  "External Single-Sign On (SSO)",
  "Hiring Assessments",
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-cyan-50/50 via-background to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Pricing
          </h1>

          <div className="flex items-center justify-center gap-4 mb-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground">
                Try free demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Book a demo
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            No password or credit card required!
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-6">Free</h2>
              
              <a href="https://app.apexloopai.com/dashboard" className="block mb-8">
                <Button variant="outline" className="w-full" size="lg">
                  Try a free demo
                </Button>
              </a>

              <ul className="space-y-4">
                {freeFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Plan */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-6">Custom</h2>
              
              <Link to="/contact" className="block mb-8">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white" size="lg">
                  Book a demo
                </Button>
              </Link>

              <ul className="space-y-4">
                {customFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">ApexLoop</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Palette Space. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="https://palettespace.org" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">palettespace.org</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
