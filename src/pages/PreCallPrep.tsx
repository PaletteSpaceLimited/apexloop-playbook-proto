import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  PlayCircle,
  Target,
  MessageSquare,
  Clock,
  TrendingUp,
  Phone,
  AlertTriangle,
  Lightbulb,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

export default function PreCallPrep() {
  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 mb-6">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Scenario 3</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Pre-Call Prep for <span className="text-orange-500">High-Stakes</span> Conversations
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            "War Game" Before Big Client Meetings: <span className="text-foreground font-semibold">Go in with Total Confidence</span>
          </p>

          {/* Dialogue Illustration */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-12">
            <div className="bg-white border-2 border-orange-400 rounded-lg p-4 max-w-sm shadow-lg relative">
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-orange-400 border-b-8 border-b-transparent"></div>
              <p className="text-sm text-muted-foreground">
                The CEO meeting is set. The budget is real. Have you pressure-tested your answers to the <span className="font-semibold text-foreground">5 questions that could make or break the deal?</span>
              </p>
            </div>

            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
              <Users className="w-12 h-12 text-orange-600" />
            </div>

            <div className="bg-white border-2 border-orange-400 rounded-lg p-4 max-w-sm shadow-lg relative">
              <div className="absolute -right-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-orange-400 border-b-8 border-b-transparent"></div>
              <p className="text-sm text-muted-foreground">
                With ApexLoop, you can simulate the client conversation multiple times with precision — <span className="font-semibold text-foreground">sharpening your responses to objections before they happen.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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

      {/* Why It Works Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Why It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Customized Scenarios</h3>
                <p className="text-muted-foreground">Tailored practice based on client industry, company size, known pain points</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Stress Inoculation</h3>
                <p className="text-muted-foreground">Having experienced "worst case" in a safe space, you're calmer in the real meeting</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Talk Track Polish</h3>
                <p className="text-muted-foreground">Say it to AI 5 times, version 5 is 3x smoother than version 1</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Team Coordination</h3>
                <p className="text-muted-foreground">Pre-sales, sales, technical practice together ensuring seamless collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: The Challenge */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-orange-500 font-bold text-lg">3# The Challenge:</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SDRs Wasting 16 Hours on Pre-Call Research
          </h2>
          <p className="text-muted-foreground mb-8">
            Client: Hong Kong cloud SaaS · 15 AEs · Target: 30 calls/day
          </p>

          {/* Quote */}
          <div className="bg-white border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm mb-8">
            <div className="flex items-start gap-3">
              <Quote className="w-8 h-8 text-orange-400 shrink-0" />
              <div>
                <p className="text-xl font-semibold text-foreground mb-2">
                  "15 SDRs stare at 1,000 leads—and nobody wants to dial."
                </p>
              </div>
            </div>
          </div>

          {/* Challenge Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <p className="text-4xl font-bold text-red-500 mb-2">60%</p>
              <p className="text-muted-foreground">3-month SDR turnover</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <p className="text-4xl font-bold text-red-500 mb-2">10%</p>
              <p className="text-muted-foreground">Demo target attainment</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <p className="text-4xl font-bold text-red-500 mb-2">38s</p>
              <p className="text-muted-foreground">Average opening length</p>
            </div>
          </div>

          {/* Quote from VP */}
          <p className="text-sm text-muted-foreground italic mb-8 text-center">
            "Cold calls need to win in 15 seconds—our reps talk 40 seconds and get hung up."<br/>
            <span className="font-medium">— VP Tsang</span>
          </p>

          {/* Timeline Issues */}
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="font-bold text-foreground mb-4">Pain Points Timeline:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded font-medium shrink-0">A</span>
                <p className="text-muted-foreground">9:00 — SDRs stuck in CRM; new hire: "I don't know what to say first."</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded font-medium shrink-0">B</span>
                <p className="text-muted-foreground">10:00 — First calls start shaky → "No." (18-second hangups)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded font-medium shrink-0">C</span>
                <p className="text-muted-foreground">12:00 — 8 hours / 15 reps / 100 calls → &lt;1 min conversations: 9 → demos: 0</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded font-medium shrink-0">D</span>
                <p className="text-muted-foreground">Discovery calls collapse on "Competitive/Technical" questions → "Need to ask engineer" → hangup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Breakthrough */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            The Breakthrough: <span className="text-orange-500">ApexLoop Cloud Cold-Call Bootcamp</span>
          </h2>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-muted-foreground">6%</span>
                <ArrowRight className="w-5 h-5 text-orange-500" />
                <span className="text-3xl font-bold text-orange-500">18%</span>
              </div>
              <p className="text-sm text-muted-foreground">Cold call connect rate</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-muted-foreground">1.8%</span>
                <ArrowRight className="w-5 h-5 text-orange-500" />
                <span className="text-3xl font-bold text-orange-500">6.2%</span>
              </div>
              <p className="text-sm text-muted-foreground">Cold call → Demo conversion</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-muted-foreground">38s</span>
                <ArrowRight className="w-5 h-5 text-orange-500" />
                <span className="text-3xl font-bold text-orange-500">14s</span>
              </div>
              <p className="text-sm text-muted-foreground">Opening length</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-muted-foreground">25</span>
                <ArrowRight className="w-5 h-5 text-orange-500" />
                <span className="text-3xl font-bold text-orange-500">48</span>
              </div>
              <p className="text-sm text-muted-foreground">Monthly demos</p>
            </div>
          </div>

          {/* 6-Week Program */}
          <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
            <h3 className="font-bold text-foreground mb-6 text-xl">6-Week AI Call-Training Loop:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <span className="bg-orange-500 text-white px-3 py-1 rounded font-medium shrink-0">A</span>
                <p className="text-foreground">Rebuilt onboarding into a 6-week AI call-training loop</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <span className="bg-orange-500 text-white px-3 py-1 rounded font-medium shrink-0">B</span>
                <p className="text-foreground">Week 1–2 — 15-second "golden opening" drilled 50x (simple, quantified, relevant)</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <span className="bg-orange-500 text-white px-3 py-1 rounded font-medium shrink-0">C</span>
                <p className="text-foreground">Week 3–4 — SPIN discovery: each call requires 8+ questions; AI scores depth & need clarity</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <span className="bg-orange-500 text-white px-3 py-1 rounded font-medium shrink-0">D</span>
                <p className="text-foreground">Week 5–6 — Competitor handling & pricing/ROI drills with real objection scenarios</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <span className="bg-orange-500 text-white px-3 py-1 rounded font-medium shrink-0">E</span>
                <p className="text-foreground">Daily loop — Morning calls → noon AI scoring → afternoon targeted practice → evening calls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8">
            The Transformation: Shorter Openings, More Demos, Lower Churn
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-foreground mb-2">14s</p>
              <p className="text-muted-foreground">Optimized Opening</p>
            </div>
            <div className="p-6">
              <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-foreground mb-2">92%</p>
              <p className="text-muted-foreground">More Demos</p>
            </div>
            <div className="p-6">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-foreground mb-2">↓40%</p>
              <p className="text-muted-foreground">SDR Turnover Reduced</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 border border-border shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to master your pre-call prep?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join hundreds of sales teams already using ApexLoop to nail every important call.
            </p>
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
