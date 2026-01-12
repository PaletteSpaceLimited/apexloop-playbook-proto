import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  PlayCircle,
  Target,
  BarChart3,
  Eye,
  TrendingUp,
  Award,
  RefreshCw,
  Quote,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

export default function QADealAssessment() {
  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 mb-6">
            <Search className="w-4 h-4" />
            <span className="text-sm font-medium">Scenario 4</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            QA & <span className="text-orange-500">Performance Diagnostics</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            100% Call QA: From "Random Sampling Blind Spots" to <span className="text-foreground font-semibold">"Total Data Visibility"</span>
          </p>

          {/* Comparison Illustration */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-12">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 max-w-sm shadow-lg relative">
              <div className="absolute -top-3 left-4 bg-gray-500 text-white text-xs px-2 py-1 rounded">Traditional QA</div>
              <p className="text-sm text-muted-foreground mt-2">
                Manager reviews 20 calls per week and gives vague, subjective feedback like <span className="font-semibold text-foreground">"your opening wasn't great."</span>
              </p>
            </div>

            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
              <Users className="w-12 h-12 text-orange-600" />
            </div>

            <div className="bg-white border-2 border-orange-400 rounded-lg p-4 max-w-sm shadow-lg relative">
              <div className="absolute -top-3 left-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">With ApexLoop QA</div>
              <p className="text-sm text-muted-foreground mt-2">
                Every call is auto-scored. You get specific, data-backed insights like <span className="font-semibold text-foreground">"your question rate is 40% below the team average — this is driving low conversion."</span>
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
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Data-Driven</h3>
                <p className="text-muted-foreground">Not subjective feelings, but objective metrics like "60% talk ratio vs team avg 45%"</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Precise Diagnosis</h3>
                <p className="text-muted-foreground">Not vague "poor performance," but "objection handling stage scored low, specifically weak on price objections"</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Comparative Learning</h3>
                <p className="text-muted-foreground">See how Top 20% handle "price objections," one-click copy to your own practice</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                <RefreshCw className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Continuous Improvement</h3>
                <p className="text-muted-foreground">Auto-generate "3 scenarios you need to focus on this week"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Transform Your QA Process
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-bold">✗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-500">Traditional QA</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-muted-foreground">Random sampling: Only 5% of calls reviewed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-muted-foreground">Subjective feedback: "Try to be more confident"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-muted-foreground">Delayed insights: Weekly or monthly reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-muted-foreground">No benchmarking: Can't compare to top performers</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-white rounded-xl p-8 border-2 border-orange-400 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-orange-500">ApexLoop QA</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-foreground">100% coverage: Every call auto-scored</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-foreground">Data-backed: "Talk ratio 60% vs team avg 45%"</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-foreground">Real-time: Insights available after every call</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-foreground">Top performer comparison: Learn from the best</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Key Metrics We Track
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <Eye className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Call Coverage</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <BarChart3 className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">15+</p>
              <p className="text-sm text-muted-foreground">Scoring Dimensions</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">Real-time</p>
              <p className="text-sm text-muted-foreground">Feedback Delivery</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <Award className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">Top 20%</p>
              <p className="text-sm text-muted-foreground">Benchmark Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 border border-border shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready for Total Data Visibility?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Stop guessing about call quality. Get objective, data-driven insights on every single call.
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
