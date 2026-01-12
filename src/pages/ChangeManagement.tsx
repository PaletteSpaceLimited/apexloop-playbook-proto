import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  PlayCircle,
  Users,
  FileText,
  Presentation,
  Video,
  HelpCircle,
  Bot,
  Target,
  BarChart3,
  Rocket,
  Clock,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

export default function ChangeManagement() {
  const whyItWorks = [
    {
      title: "Scenario-Driven",
      description: "Not reading PPTs, but practicing \"client asks A, you answer B\""
    },
    {
      title: "Rapid Iteration",
      description: "Marketing spots misunderstanding, updates scenarios, entire team re-practices within 24 hours"
    },
    {
      title: "Conversational Translation",
      description: "AI helps convert \"product doc language\" into \"language clients understand\""
    },
    {
      title: "Team Sync",
      description: "No reliance on sales meetings or email blasts, practice equals alignment"
    }
  ];

  const bootcampDays = [
    {
      day: "Day 0",
      title: "Marketing builds 10 core scenarios",
      items: [
        "Plans, 4G vs 5G, competitors, price, family/business pitches"
      ]
    },
    {
      day: "Days 1-3",
      title: "2,000 staff each complete 50 AI roleplays",
      items: [
        "e.g. \"Why HK$10 more?\" → value-based answer",
        "Rule: 80/100 required on each scenario"
      ]
    },
    {
      day: "Day 4",
      title: "Certification",
      items: [
        "Final test: 3 random scenarios, all must score 75+",
        "82% pass on first attempt",
        "Result: 2,000 staff with unified talk tracks in 3 days"
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
            Change Management
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Roll out new messaging and processes seamlessly across your entire team
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
              Scenario: Product Changes & Talk Track Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              New Product Launch, Entire Team Aligned in 3 Days: From "Information Overload" to "Ready to Sell"
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
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">10 new products</p>
                    <p className="text-sm text-muted-foreground">launching</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Create new scenarios,</p>
                    <p className="text-sm text-muted-foreground">practice 10 times</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">Team ready in 3 days</p>
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
                    <Rocket className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-foreground">10 new products launching</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Presentation className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-foreground">Receive 100-page PPT</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-foreground">Read materials</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <Video className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium text-foreground">Attend webinars</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="font-medium text-red-600">Still don't know what to say</p>
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
              The Challenge: New Product Launch Chaos Across 220 Stores
            </h2>
            <p className="text-muted-foreground mb-6">
              Client: Hong Kong telecom operator · 220 stores · 2,000+ sales staff · Quarterly new plan launches
            </p>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <p className="text-xl font-bold text-foreground mb-6 text-center">
                "Customer visits 3 stores, gets 3 different answers"
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">8%</p>
                  <p className="text-sm text-foreground">New Plan Adoption Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">30</p>
                  <p className="text-sm text-foreground">Complaints per Month</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground">2 Weeks</p>
                  <p className="text-sm text-foreground">Competitive Response Time</p>
                </div>
              </div>

              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "I'm not hiring consistent sales teams, I'm creating confusion machines"
                <footer className="mt-2 font-medium text-foreground">— Manager Wong</footer>
              </blockquote>
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p><strong>A) Day 1 - Launch:</strong> HQ launches "5G Unlimited Plan" → 80-page PPT distributed → "Master in 3 days"</p>
              <p><strong>B) Day 4 - Customer confusion:</strong> Customer visits 3 stores, gets 3 different answers about same plan:</p>
              <p className="pl-4">• Store A: "Throttled to 1Mbps after 40GB" / Store B: "Completely unlimited data" / Store C: "I'm not sure...let me check"</p>
              <p><strong>C) Week 2 - Competitor pressure:</strong> Competitor drops price HK$10 → Staff says "Then go get theirs" → Customer walks away</p>
              <p><strong>D) Month 1 - Failed launch:</strong> Target: 30% adoption → Actual: 8% (completion rate: 27%)</p>
            </div>
          </div>

          {/* The Breakthrough */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              The Breakthrough: ApexLoop 3-Day Store Synchronization
            </h2>

            <div className="bg-background rounded-2xl p-8 border border-border mb-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    <span>8%</span>
                    <span className="mx-2">→</span>
                    <span className="text-orange-500">34%</span>
                  </p>
                  <p className="text-sm text-foreground">New Plan Adoption</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    <span>35%</span>
                    <span className="mx-2">→</span>
                    <span className="text-orange-500">96%</span>
                  </p>
                  <p className="text-sm text-foreground">Talk Track Consistency</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    <span>30</span>
                    <span className="mx-2">→</span>
                    <span className="text-orange-500">6</span>
                  </p>
                  <p className="text-sm text-foreground">Complaints per Month</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    <span>2 Weeks</span>
                    <span className="mx-2">→</span>
                    <span className="text-orange-500">1 Day</span>
                  </p>
                  <p className="text-sm text-foreground">Competitive Response Speed</p>
                </div>
              </div>

              <blockquote className="italic text-foreground border-l-4 border-primary pl-4">
                "Now we can make 2,000 people say the same thing in 3 days. When competitors make a move, we can update talk tracks same day."
                <footer className="mt-2 font-medium text-muted-foreground">— Manager Wong</footer>
              </blockquote>
            </div>

            {/* Bootcamp Structure */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-4">A) 3-day synchronized product bootcamp</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {bootcampDays.map((day, index) => (
                  <div key={index} className="bg-background rounded-xl border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {index === 0 && <Target className="w-5 h-5 text-primary" />}
                        {index === 1 && <Bot className="w-5 h-5 text-primary" />}
                        {index === 2 && <BarChart3 className="w-5 h-5 text-primary" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary">{day.day}</p>
                        <p className="font-semibold text-foreground">{day.title}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {day.items.map((item, i) => (
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

            {/* Real-time update mechanism */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-primary" />
                Real-time update mechanism
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  Competitor cuts price → new scenario created within 2 hours → all staff practice it that evening
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  "Discover → Update → Master" speed cut from 2 weeks to 1 day
                </li>
              </ul>
            </div>
          </div>

          {/* The Transformation */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              The Transformation: Unified Voice Across 220 Stores
            </h2>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 border border-border shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to streamline your change management?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Align your entire team on new messaging in days, not weeks.
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
