import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  Building2,
  Shield,
  Phone,
  Store,
  Mic,
  Target,
  DollarSign,
  Clock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

const caseStudies = [
  {
    id: 1,
    color: "orange",
    challenge: "New Agents Burning Out Before They Ramp",
    client: "Hong Kong life insurance company",
    details: "50+ new agents/month · 3-month probation",
    quote: "50 new hires join, only 32 remain after 3 months",
    directorQuote: "I'm not hiring sales reps, I'm training them for competitors",
    director: "Director Chan",
    beforeStats: [
      { value: "52.5%", label: "Attrition Rate" },
      { value: "3.2/10", label: "New Hire Confidence" },
      { value: "$9M", label: "Annual Waste" },
    ],
    breakthrough: "ApexLoop Insurance Bootcamp",
    afterStats: [
      { before: "52.5%", after: "81%", label: "3-Month Retention" },
      { before: "5%", after: "13%", label: "First-month close rate" },
      { before: "3.2/10", after: "7.8/10", label: "New-hire confidence" },
      { before: "", after: "$5.2M", label: "Estimated annual savings" },
    ],
    transformation: "Confident New Agents, Lower Attrition",
    icon: Shield,
  },
  {
    id: 2,
    color: "blue",
    challenge: "New Product Launch Chaos Across 220 Stores",
    client: "Hong Kong telecom operator",
    details: "220 stores · 2,000+ sales staff · Quarterly new plan launches",
    quote: "Customer visits 3 stores, gets 3 different answers",
    directorQuote: "I'm not hiring consistent sales teams, I'm creating confusion machines",
    director: "Manager Wong",
    beforeStats: [
      { value: "8%", label: "New Plan Adoption Rate" },
      { value: "30", label: "Complaints per Month" },
      { value: "2 Weeks", label: "Competitive Response Time" },
    ],
    breakthrough: "ApexLoop 3-Day Store Synchronization",
    afterStats: [
      { before: "8%", after: "34%", label: "New Plan Adoption" },
      { before: "35%", after: "96%", label: "Talk Track Consistency" },
      { before: "30", after: "6", label: "Complaints per Month" },
      { before: "2 Weeks", after: "1 Day", label: "Competitive Response Speed" },
    ],
    transformation: "Unified Voice Across 220 Stores",
    icon: Store,
  },
  {
    id: 3,
    color: "green",
    challenge: "SDRs Wasting 16 Hours on Pre-Call Research",
    client: "Hong Kong cloud SaaS",
    details: "15 AEs · Target: 30 calls/day",
    quote: "15 SDRs stare at 1,000 leads—and nobody wants to dial.",
    directorQuote: "Cold calls need to win in 15 seconds—our reps talk 40 seconds and get hung up.",
    director: "VP Tsang",
    beforeStats: [
      { value: "60%", label: "3-month SDR turnover" },
      { value: "10%", label: "Demo target attainment" },
      { value: "38s", label: "Average opening length" },
    ],
    breakthrough: "ApexLoop Cloud Cold-Call Bootcamp",
    afterStats: [
      { before: "6%", after: "18%", label: "Cold call connect rate" },
      { before: "1.8%", after: "6.2%", label: "Cold call → Demo conversion" },
      { before: "38s", after: "14s", label: "Opening length" },
      { before: "25", after: "48", label: "Monthly demos" },
    ],
    transformation: "Shorter Openings, More Demos, Lower Churn",
    icon: Phone,
  },
  {
    id: 4,
    color: "purple",
    challenge: "High-Stakes Frontline Communication Under Public Scrutiny",
    client: "Hong Kong Social Welfare service center",
    details: "60 frontline staff · 200+ citizen inquiries/day",
    quote: "One sentence can go viral—and trigger accountability.",
    directorQuote: "Traditional training reads documents, but in real situations they still don't know what to say.",
    director: "Director Tam",
    beforeStats: [
      { value: "12/year", label: "Public opinion incidents" },
      { value: "45/month", label: 'Complaints: "cold attitude"' },
      { value: "45%", label: "Policy answer consistency" },
    ],
    breakthrough: "ApexLoop Social Services Frontline Bootcamp",
    afterStats: [
      { before: "12", after: "1/year", label: "Public opinion incidents" },
      { before: "45", after: "3/month", label: 'Complaints: "cold attitude"' },
      { before: "45%", after: "94%", label: "Policy consistency" },
      { before: "2 weeks", after: "3 days", label: "New policy mastery" },
    ],
    transformation: "Consistent Messaging, Fewer Complaints, Lower Public-Risk Exposure",
    icon: Mic,
  },
];

const colorClasses = {
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-400",
    text: "text-orange-600",
    badge: "bg-orange-500",
    light: "bg-orange-100",
    statBg: "bg-orange-50",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-400",
    text: "text-blue-600",
    badge: "bg-blue-500",
    light: "bg-blue-100",
    statBg: "bg-blue-50",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-400",
    text: "text-green-600",
    badge: "bg-green-500",
    light: "bg-green-100",
    statBg: "bg-green-50",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-400",
    text: "text-purple-600",
    badge: "bg-purple-500",
    light: "bg-purple-100",
    statBg: "bg-purple-50",
  },
};

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Success <span className="text-primary">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Real results from real companies. See how ApexLoop transforms sales teams across industries.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {caseStudies.map((study) => {
            const colors = colorClasses[study.color as keyof typeof colorClasses];
            const IconComponent = study.icon;
            
            return (
              <div key={study.id} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                {/* Header */}
                <div className={`${colors.bg} p-6 border-b border-border`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`${colors.badge} text-white text-xs px-2 py-1 rounded font-medium`}>
                          Case #{study.id}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        The Challenge: {study.challenge}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{study.client}</span>
                        </div>
                        <span>·</span>
                        <span>{study.details}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Quote */}
                  <div className={`${colors.statBg} rounded-xl p-6 mb-8 text-center`}>
                    <p className="text-xl md:text-2xl font-semibold text-foreground italic">
                      "{study.quote}"
                    </p>
                  </div>

                  {/* Before Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.beforeStats.map((stat, idx) => (
                      <div key={idx} className="text-center p-4 bg-red-50 rounded-lg">
                        <p className="text-2xl md:text-3xl font-bold text-red-600">{stat.value}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Director Quote */}
                  <div className="flex items-start gap-3 mb-8 p-4 bg-muted/50 rounded-lg">
                    <span className="text-2xl">"</span>
                    <div>
                      <p className="text-muted-foreground italic">{study.directorQuote}</p>
                      <p className="text-sm font-medium text-foreground mt-2">— {study.director}</p>
                    </div>
                  </div>

                  {/* Breakthrough */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold ${colors.text} mb-6 flex items-center gap-2`}>
                      <Zap className="w-5 h-5" />
                      The Breakthrough: {study.breakthrough}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.afterStats.map((stat, idx) => (
                        <div key={idx} className={`text-center p-4 bg-white rounded-xl border-2 ${colors.border} shadow-sm`}>
                          <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
                          <div className="flex items-center justify-center gap-2 flex-wrap">
                            {stat.before && (
                              <>
                                <span className="text-lg text-red-400 line-through">{stat.before}</span>
                                <ArrowRight className={`w-4 h-4 ${colors.text}`} />
                              </>
                            )}
                            <span className={`text-2xl font-bold ${colors.text}`}>{stat.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transformation */}
                  <div className={`${colors.bg} rounded-xl p-6 text-center`}>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendingUp className={`w-5 h-5 ${colors.text}`} />
                      <span className="text-sm font-medium text-muted-foreground">The Transformation</span>
                    </div>
                    <p className={`text-xl font-bold ${colors.text}`}>{study.transformation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 border border-border shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join leading companies across Asia who have transformed their sales teams with ApexLoop.
            </p>
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
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
