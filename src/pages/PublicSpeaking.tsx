import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Mic,
  Zap,
  PlayCircle,
  Target,
  AlertTriangle,
  TrendingUp,
  Award,
  Calendar,
  Quote,
  Users,
  Building2,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";

export default function PublicSpeaking() {
  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-background">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Public Speaking <span className="text-purple-500">Readiness</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl">
            Roleplay training for government, schools, and NGOs to improve high-stakes communication and public engagement
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
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

      {/* Challenge Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              The Challenge: High-Stakes Frontline Communication Under Public Scrutiny
            </h2>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Client: Hong Kong Social Welfare service center</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>60 frontline staff</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>200+ citizen inquiries/day</span>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8 text-center">
              <p className="text-xl md:text-2xl font-semibold text-foreground italic">
                "One sentence can go viral—and trigger accountability."
              </p>
            </div>

            {/* Before Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">12 / year</p>
                <p className="text-sm text-muted-foreground">Public opinion incidents</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">45 / month</p>
                <p className="text-sm text-muted-foreground">Complaints: "cold attitude"</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">45%</p>
                <p className="text-sm text-muted-foreground">Policy answer consistency</p>
              </div>
            </div>

            {/* Director Quote */}
            <div className="flex items-start gap-3 mb-8 p-4 bg-muted/50 rounded-lg">
              <Quote className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
              <div>
                <p className="text-muted-foreground italic">
                  "Traditional training reads documents, but in real situations they still don't know what to say."
                </p>
                <p className="text-sm font-medium text-foreground mt-2">— Director Tam</p>
              </div>
            </div>

            {/* Cases */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-medium shrink-0">Case A</span>
                <p className="text-sm text-muted-foreground">
                  Rejection delivered too bluntly → citizen feels dismissed ("you don't qualify") → escalates into a complaint and negative social sharing
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-medium shrink-0">Case B</span>
                <p className="text-sm text-muted-foreground">
                  Policy/process explained in jargon → citizen can't follow the next steps → repeat questions, longer queues, rising frustration
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-medium shrink-0">Case C</span>
                <p className="text-sm text-muted-foreground">
                  Inconsistent guidance across counters → citizen makes multiple trips and brings unnecessary documents → complaint: "Why are you telling me different things?"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-medium shrink-0">Case D</span>
                <p className="text-sm text-muted-foreground">
                  Daily pressure — High daily volume + frequent policy updates → staff default to scripted policy language → fear of misspeaking increases during peak hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              The Breakthrough: ApexLoop Social Services Frontline Bootcamp
            </h2>
          </div>

          {/* After Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-6 bg-white rounded-xl border-2 border-purple-400 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">Public opinion incidents</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl text-red-400 line-through">12</span>
                <ArrowRight className="w-4 h-4 text-purple-500" />
                <span className="text-3xl font-bold text-purple-600">1</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">/ year</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border-2 border-purple-400 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">Complaints: "cold attitude"</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl text-red-400 line-through">45</span>
                <ArrowRight className="w-4 h-4 text-purple-500" />
                <span className="text-3xl font-bold text-purple-600">3</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">/ month</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border-2 border-purple-400 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">Policy consistency</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl text-red-400 line-through">45%</span>
                <ArrowRight className="w-4 h-4 text-purple-500" />
                <span className="text-3xl font-bold text-purple-600">94%</span>
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border-2 border-purple-400 shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">New policy mastery</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl text-red-400 line-through">2 weeks</span>
                <ArrowRight className="w-4 h-4 text-purple-500" />
                <span className="text-3xl font-bold text-purple-600">3 days</span>
              </div>
            </div>
          </div>

          {/* Training Program */}
          <div className="bg-white rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              6-Week Training Program
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <span className="bg-purple-500 text-white px-3 py-1 rounded text-sm font-medium shrink-0">Week 1-2</span>
                <p className="text-foreground">"Official language" → "Plain language" scripts with HK$ examples</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <span className="bg-purple-500 text-white px-3 py-1 rounded text-sm font-medium shrink-0">Week 3-4</span>
                <p className="text-foreground">Empathy framework under time pressure (acknowledge → explain → alternatives → next step)</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <span className="bg-purple-500 text-white px-3 py-1 rounded text-sm font-medium shrink-0">Week 5-6</span>
                <p className="text-foreground">Public-risk simulation: AI plays "citizen recording on phone" to train calm, professional responses</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">New policy rollout:</strong> Day 1 doc issued → Day 1 PM scenario build → Day 2-3 practice → Day 4 certification → Day 5 unified messaging
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Transformation: Consistent Messaging, Fewer Complaints, Lower Public-Risk Exposure
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Risk Reduction</h3>
              <p className="text-muted-foreground text-sm">92% decrease in public opinion incidents through consistent, professional communication</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Faster Adoption</h3>
              <p className="text-muted-foreground text-sm">New policies mastered in 3 days instead of 2 weeks, enabling rapid rollout</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Service Excellence</h3>
              <p className="text-muted-foreground text-sm">93% reduction in "cold attitude" complaints, building public trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-12 border border-border shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-purple-500 flex items-center justify-center mx-auto mb-6">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Frontline Communication?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Equip your team with the skills to handle high-stakes public interactions with confidence and consistency.
            </p>
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
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
