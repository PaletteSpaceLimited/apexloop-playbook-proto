import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  PlayCircle,
  Users,
  Video,
  FileText,
  Eye,
  Rocket,
  AlertTriangle,
  TrendingUp,
  Target,
  Award,
  Clock,
  Bot,
  MessageSquare,
  BarChart3,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

export default function OnboardingCertifications() {
  const whyItWorks = [
    {
      title: "Zero-Risk Practice",
      description: "Mistakes made with AI don't cost real prospects"
    },
    {
      title: "Instant Feedback",
      description: "No waiting a week for manager review, AI corrects in real-time"
    },
    {
      title: "Muscle Memory",
      description: "After 20-30 repetitions, talk tracks become instinctive"
    },
    {
      title: "Standardized Certification",
      description: "80+ score required to launch, ensuring quality baseline"
    }
  ];

  const bootcampWeeks = [
    {
      week: "Week 1",
      title: "Foundation with AI roleplays",
      items: [
        "30 persona-based simulations from day one",
        "Practice real conversations, not memorize scripts"
      ]
    },
    {
      week: "Week 2",
      title: "Objection drills + certification",
      items: [
        "10 core objections drilled ~20x each",
        "Must pass 80+ on random scenarios to graduate"
      ]
    },
    {
      week: "Week 3",
      title: "Real-call QA & targeted coaching",
      items: [
        "Every real call auto-scored on 8 dimensions",
        "Managers coach only where it matters"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Use Case</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Onboarding & Certifications
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Accelerate new hire ramp time by 50% with AI-powered practice
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Try it now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Button variant="outline" size="lg">
              <PlayCircle className="w-4 h-4 mr-2" />
              Watch demo
            </Button>
          </div>
        </div>
      </section>

      {/* Scenario Comparison Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Scenario: New Hire Onboarding & Pre-Launch Certification
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't Embarrass Yourself on Call #1: From "Learning by Failing" to "Launch After Practice"
            </p>
          </div>

          {/* ApexLoop Way */}
          <div className="mb-6">
            <div className="bg-primary text-primary-foreground rounded-t-xl px-6 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-bold">ApexLoop</span>
            </div>
            <div className="bg-background border border-border border-t-0 rounded-b-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">20 AI roleplay</p>
                    <p className="text-sm text-muted-foreground">Sessions</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Pass Scoring</p>
                    <p className="text-sm text-muted-foreground">Certification</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">Launch with</p>
                    <p className="text-sm text-green-600 italic">"50 calls of experience"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Traditional Way */}
          <div className="mb-10">
            <div className="bg-orange-500 text-white rounded-t-xl px-6 py-3">
              <span className="font-bold">Traditional Onboarding</span>
            </div>
            <div className="bg-background border border-border border-t-0 rounded-b-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Video className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-foreground">Watch videos</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-foreground">Read scripts</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-foreground">Shadow veterans</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-foreground">Go live</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="font-medium text-red-600">Mess up the first 50 calls</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Works */}
          <div className="bg-background rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Why It Works</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyItWorks.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}:</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* The Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              The Challenge: New Agents Burning Out Before They Ramp
            </h2>
            <p className="text-muted-foreground mb-6">
              Client: Hong Kong life insurance company · 50+ new agents/month · 3-month probation
            </p>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <p className="text-xl font-bold text-foreground mb-6 text-center">
                "50 new hires join, only 32 remain after 3 months"
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">52.5%</p>
                  <p className="text-sm text-foreground">Attrition Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">3.2/10</p>
                  <p className="text-sm text-foreground">New Hire Confidence</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">$9M</p>
                  <p className="text-sm text-foreground">Annual Waste</p>
                </div>
              </div>

              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "I'm not hiring sales reps, I'm training them for competitors"
                <footer className="mt-2 font-medium text-foreground">— Director Chan</footer>
              </blockquote>
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p><strong>A) 1st Month:</strong> First client meeting → New hire freezes: "Please... reconsider."</p>
              <p><strong>B) 2nd Month:</strong> ~80 calls · 5 meetings · 0 closes → "I'm not suitable for insurance" → resigns.</p>
              <p><strong>C) 3rd month:</strong> 50 joined · 35 left → 47.5% attrition.</p>
              <p><strong>D) HR cost:</strong> ~HK$10,000 / hire → ~HK$9M burned per year on early exits.</p>
            </div>
          </div>

          {/* The Breakthrough */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              The Breakthrough: ApexLoop Insurance Bootcamp
            </h2>

            <div className="bg-background rounded-2xl p-8 border border-border mb-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    <span>52.5%</span>
                    <span className="mx-2">→</span>
                    <span className="text-orange-500">81%</span>
                  </p>
                  <p className="text-sm text-foreground">3-Month Retention</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    <span>5%</span>
                    <span className="mx-2">→</span>
                    <span className="text-orange-500">13%</span>
                  </p>
                  <p className="text-sm text-foreground">First-month close rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    <span>3.2/10</span>
                    <span className="mx-2">→</span>
                    <span className="text-orange-500">7.8/10</span>
                  </p>
                  <p className="text-sm text-foreground">New-hire confidence</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-500">$5.2M</p>
                  <p className="text-sm text-foreground">Estimated annual savings</p>
                </div>
              </div>

              <blockquote className="italic text-foreground border-l-4 border-primary pl-4">
                "I finally know how to answer every customer question"
                <footer className="mt-2 font-medium text-muted-foreground">— Lee, 3 months in, closed 5 deals this month</footer>
              </blockquote>
            </div>

            {/* 3-Week Bootcamp */}
            <div className="grid md:grid-cols-3 gap-6">
              {bootcampWeeks.map((week, index) => (
                <div key={index} className="bg-background rounded-xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {index === 0 && <Bot className="w-5 h-5 text-primary" />}
                      {index === 1 && <Target className="w-5 h-5 text-primary" />}
                      {index === 2 && <BarChart3 className="w-5 h-5 text-primary" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{week.week}</p>
                      <p className="font-semibold text-foreground">{week.title}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {week.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* The Transformation */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              The Transformation: Confident New Agents, Lower Attrition
            </h2>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 border border-border shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to transform your onboarding?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join hundreds of sales teams already using ApexLoop to accelerate new hire ramp time.
            </p>
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
