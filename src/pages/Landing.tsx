import { Link } from "react-router-dom";
import { Zap, Bot, BarChart3, Target, ArrowRight, CheckCircle2, PlayCircle, Clock, TrendingDown, Users2, ChevronDown, ChevronUp, Quote, Twitter, Linkedin, Youtube, Headphones, MessageSquare, Award, Timer, DollarSign, UserX, RefreshCw, Globe, Mic, LineChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";
import { useState } from "react";

// Product capabilities from pitch deck
const productCapabilities = [{
  icon: <Mic className="w-6 h-6" />,
  title: "AI Sales Roleplays",
  description: "AI buyer roleplays to practice sales conversations and boost performance. Cold calls, discovery calls, objection handling - 24/7.",
  features: ["Real-time Voice Roleplays", "Multilingual Support", "High-fidelity Customer Personas"]
}, {
  icon: <BarChart3 className="w-6 h-6" />,
  title: "AI Real Call Scoring",
  description: "Automatically score real calls and generate coaching insights. Every call analyzed across 12+ dimensions.",
  features: ["Instant Scoring", "Timestamped Feedback", "Custom Scorecards", "Team Analytics"]
}, {
  icon: <Sparkles className="w-6 h-6" />,
  title: "AI Coaching",
  description: "Personalized coaching based on roleplays and real call performance. Get specific, actionable feedback instantly.",
  features: ["Coaching Priorities", "Rep Benchmarking", "Team Visibility", "Progress Tracking"]
}];

// Updated stats from pitch deck
const stats = [{
  value: "50,000+",
  label: "Roleplays Completed"
}, {
  value: "40%",
  label: "Close Rate Increase"
}, {
  value: "66%",
  label: "Faster Ramp Time"
}];
const logos = ["Enterprise Corp", "TechFlow", "Insurance HK", "Nexus AI", "SalesForge", "DataPulse"];

// 5 Challenges from pitch deck
const challenges = [{
  icon: Timer,
  number: "#1",
  title: "Ramp Time Is Too Long",
  stat: "6 months",
  description: "Average SDR ramp time. Cost per new SDR in first 6 months: $180K–300K"
}, {
  icon: DollarSign,
  number: "#2",
  title: "Wasting Prospects On Untrained Reps",
  stat: "20-50",
  description: "First prospects = Expensive 'practice'. Nervous, lacking confidence, poor objection handling"
}, {
  icon: Users2,
  number: "#3",
  title: "Top Performer Secrets Are Wasted",
  stat: "2.5x",
  description: "Top 20% outperform middle 60%. You know WHO succeeds, but not WHY"
}, {
  icon: UserX,
  number: "#4",
  title: "Manager Time Drain",
  stat: "60%",
  description: "Re-teach same fundamentals, manually review calls, answer same questions daily"
}, {
  icon: RefreshCw,
  number: "#5",
  title: "Every Change Feels Like a War",
  stat: "$1M",
  description: "New product launches, messaging updates, market entry - 2 weeks to align teams"
}];

// Cost breakdown from pitch deck
const costBreakdown = [{
  pain: "Long Ramp Time",
  cost: "$1.8M",
  detail: "10 new SDRs × 6 months × $30K 'dead money'"
}, {
  pain: "Wasted Prospects",
  cost: "$500K",
  detail: "10 new SDRs × 50 prospects × $1K wasted"
}, {
  pain: "Performance Gap",
  cost: "$1.5M",
  detail: "Mid-tier reps could generate 20% more pipeline"
}, {
  pain: "Manager Time Drain",
  cost: "$180K",
  detail: "5 managers × 30% automatable time"
}, {
  pain: "Change Management",
  cost: "$1M",
  detail: "10 changes/year × $100K per change"
}];

// Application scenarios from pitch deck
const scenarios = [{
  title: "New Hire Onboarding & Certification",
  subtitle: "From 'Learning by Failing' to 'Launch After Practice'",
  description: "20 AI roleplay sessions → Pass scoring → Launch with '50 calls of experience'",
  benefits: ["Zero-Risk Practice", "Instant Feedback", "Muscle Memory", "Standardized Certification"]
}, {
  title: "Product Changes & Talk Track Updates",
  subtitle: "New Product Launch, Entire Team Aligned in 3 Days",
  description: "Create new scenarios, practice 10 times → Team ready in 3 days",
  benefits: ["Scenario-Driven", "Rapid Iteration", "Conversational Translation", "Team Sync"]
}, {
  title: "Pre-Call Prep for High-Stakes Conversations",
  subtitle: "'War Game' Before Big Client Meetings",
  description: "Simulate the client conversation multiple times — sharpen responses to objections",
  benefits: ["Customized Scenarios", "Stress Inoculation", "Talk Track Polish", "Team Coordination"]
}, {
  title: "QA & Performance Diagnostics",
  subtitle: "100% Call QA: From Random Sampling to Total Visibility",
  description: "Every call auto-scored with specific, data-backed insights",
  benefits: ["Data-Driven", "Precise Diagnosis", "Comparative Learning", "Continuous Improvement"]
}];

// Case study from pitch deck
const caseStudy = {
  client: "Hong Kong Life Insurance Company",
  challenge: "50+ new agents/month with 52.5% attrition rate during 3-month probation",
  quote: "I'm not hiring sales reps, I'm training them for competitors",
  quoteAuthor: "Director Chan",
  resultsBefore: [{
    label: "3-Month Retention",
    value: "47.5%"
  }, {
    label: "First-month Close Rate",
    value: "5%"
  }, {
    label: "New-hire Confidence",
    value: "3.2/10"
  }, {
    label: "Annual Waste",
    value: "$9M"
  }],
  resultsAfter: [{
    label: "3-Month Retention",
    value: "81%"
  }, {
    label: "First-month Close Rate",
    value: "13%"
  }, {
    label: "New-hire Confidence",
    value: "7.8/10"
  }, {
    label: "Estimated Savings",
    value: "$5.2M"
  }],
  successQuote: "I finally know how to answer every customer question",
  successAuthor: "Lee, 3 months in, closed 5 deals this month"
};

// Updated FAQ from pitch deck content
const faqItems = [{
  question: "How is ApexLoop different from traditional sales training?",
  answer: "Traditional training uses passive learning—videos, playbooks, occasional roleplay. ApexLoop uses AI-powered deliberate practice: reps practice specific skills repeatedly, get immediate expert feedback, and build muscle memory through realistic but low-stakes simulations."
}, {
  question: "What types of roleplays does ApexLoop support?",
  answer: "We support Cold Calls, Discovery Calls, Warm Calls, Check-In Calls, Complaint Calls, Renewal Calls, Focus Calls, and more. Each scenario has multiple difficulty levels and buyer personas (skeptical, rushed, friendly, hostile)."
}, {
  question: "How does the AI Call Scoring work?",
  answer: "AI analyzes every call across 12+ dimensions including Communication Hygiene, Sales Process, Question Rate, Talk Speed, and Objection Handling. You get specific, timestamped feedback—not vague comments like 'your opening wasn't great.'"
}, {
  question: "How long does setup take?",
  answer: "Most teams are up and running within 24 hours. We can synchronize 2,000 staff with unified talk tracks in just 3 days using our AI roleplay bootcamp approach."
}, {
  question: "Can ApexLoop help with multilingual teams?",
  answer: "Yes! We support Mandarin, Cantonese, English and more. Our AI buyers can roleplay in multiple languages, perfect for cross-cultural sales training."
}, {
  question: "What results can I expect?",
  answer: "Our clients typically see 40% improvement in close rates, 66% faster ramp time (from 6 months to 2 months), and significant reduction in new hire attrition. One insurance client reduced attrition from 52.5% to 19%."
}];

// Industries from pitch deck
const industries = [{
  name: "Insurance & Financial Services",
  description: "Train advisors to handle sensitive, regulated conversations with confidence"
}, {
  name: "B2B SaaS & IT Solution Providers",
  description: "Master complex, high-stakes product conversations"
}, {
  name: "Customer Support & Success Teams",
  description: "Standardize responses and improve outcomes across every interaction"
}, {
  name: "Recruitment & Talent Consulting",
  description: "Improve consultant performance across candidate and client conversations"
}, {
  name: "Education & Training Providers",
  description: "Coach advisors and admissions teams for high-value enrollment conversations"
}, {
  name: "Public Sector & NGOs",
  description: "Prepare staff for public, stakeholder, and community-facing communication"
}];
const footerLinks = {
  product: [{
    label: "AI Roleplays",
    href: "/solutions/ai-sales-roleplays"
  }, {
    label: "Call Scoring",
    href: "/solutions/ai-real-call-scoring"
  }, {
    label: "AI Coaching",
    href: "/solutions/ai-coaching"
  }, {
    label: "Integrations",
    href: "/solutions/integrations"
  }, {
    label: "Pricing",
    href: "/pricing"
  }],
  company: [{
    label: "About Us",
    href: "/about"
  }, {
    label: "Careers",
    href: "/careers"
  }, {
    label: "Blog",
    href: "/resources/blog"
  }, {
    label: "Press",
    href: "/press"
  }, {
    label: "Contact",
    href: "/contact"
  }],
  legal: [{
    label: "Privacy Policy",
    href: "/privacy"
  }, {
    label: "Terms of Service",
    href: "/terms"
  }, {
    label: "Security",
    href: "/security"
  }, {
    label: "GDPR",
    href: "/gdpr"
  }],
  resources: [{
    label: "Documentation",
    href: "/docs"
  }, {
    label: "API Reference",
    href: "/api"
  }, {
    label: "Demos",
    href: "/resources/demos"
  }, {
    label: "Community",
    href: "/community"
  }]
};
export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return <div className="min-h-screen bg-background overflow-hidden">
      <MegaMenuNavigation />

      {/* Hero Section - Updated with pitch deck content */}
      <section className="relative py-20 lg:py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8">
            <Zap className="w-4 h-4" />
            <span className="font-medium text-xl">AI Sales Roleplays & Sales Coaching</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6 leading-tight">
            Train Your Sales Team
            <br />
            <span className="gradient-text">Like Elite Athletes</span>
          </h1>

          <p className="text-lg md:text-xl text-body max-w-3xl mx-auto mb-10">Elite athletes don't just "do their job" to improve. They practice specific skills repeatedly, get immediate feedback, and train in realistic but low-stakes environments. Your sales reps deserve the same.<span className="font-semibold text-heading"> Your sales reps deserve the same.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground px-8 border-0">
                Try it now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-border text-heading hover:bg-muted">
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
            {stats.map(stat => <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-body mt-1">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Social Proof - Logo Cloud */}
      <section className="py-16 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium text-menu-header uppercase tracking-widest mb-8">
            Trusted by leading revenue teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {logos.map(logo => <span key={logo} className="text-xl font-bold text-heading">{logo}</span>)}
          </div>
        </div>
      </section>

      {/* The Uncomfortable Truth Section */}
      <section className="py-24 px-6 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-4">The Uncomfortable Truth</p>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              We Train Sales Reps Like It's <span className="gradient-text">1995</span>
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Imagine if we trained Olympic athletes this way... Watch videos, read playbooks, 
              occasional practice—then compete in the Olympics. <span className="font-semibold">Sounds absurd, right?</span> 
              But that's exactly how we train sales reps.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-bold text-heading mb-6 flex items-center gap-2">
                <span className="text-red-500">❌</span> Traditional Sales Training
              </h3>
              <ul className="space-y-3 text-body">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  Watch instructional videos
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  Read playbook documents
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  Occasional roleplay (if manager has time)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">•</span>
                  Then dive straight into real calls
                </li>
              </ul>
            </div>
            <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-lg font-bold text-heading mb-6 flex items-center gap-2">
                <span className="text-green-500">✓</span> Elite Athlete Training
              </h3>
              <ul className="space-y-3 text-body">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Practice specific skills repeatedly
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Get immediate, expert feedback
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Train in realistic but low-stakes environments
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  Build muscle memory through repetition
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Challenges Section - Blue Gradient Background */}
      <section className="py-24 px-6 gradient-primary-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Leading a Sales Team is Hard.
              <br />
              Scaling it? <span className="opacity-80">Even Harder.</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              "It takes four, or five, six months to ramp a salesperson. When you start scaling, the math starts to matter."
              <span className="block mt-2 text-sm italic">— Mark Roberge, CRO @ HubSpot</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(item => <div key={item.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-primary-foreground/60">{item.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-2xl font-bold text-primary-foreground mb-2">{item.stat}</p>
                <p className="text-sm text-primary-foreground/70">{item.description}</p>
              </div>)}
            {/* Total Cost Card */}
            <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-300/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/30 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Total Annual Cost</h3>
              <p className="text-3xl font-bold text-primary-foreground mb-2">$5.18M</p>
              <p className="text-sm text-primary-foreground/70">In lost performance and inefficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Capabilities Section */}
      <section className="py-24 px-6 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-4">The ApexLoop System</p>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Complete Sales <span className="gradient-text">Training Ecosystem</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Just like sports teams have practice facilities, game tape analysis, and coaching staff—
              ApexLoop provides everything your sales team needs to perform at their best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productCapabilities.map(capability => <div key={capability.title} className="bg-background rounded-2xl p-8 border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-heading mb-3">{capability.title}</h3>
                <p className="text-body leading-relaxed mb-6">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map(feature => <span key={feature} className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {feature}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Application Scenarios Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Application Scenarios</p>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              For Teams Where <span className="gradient-text">Every Conversation Counts</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              You shouldn't burn real opportunities just to get better. 
              ApexLoop turns critical conversations into muscle memory—before they matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map(scenario => <div key={scenario.title} className="bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-colors">
                <h3 className="text-xl font-bold text-heading mb-2">{scenario.title}</h3>
                <p className="text-accent font-medium mb-4">{scenario.subtitle}</p>
                <p className="text-body mb-6">{scenario.description}</p>
                <div className="space-y-2">
                  {scenario.benefits.map(benefit => <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm text-body">{benefit}</span>
                    </div>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Case Study Section - Dark Background */}
      <section className="py-24 px-6 bg-section-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-cyan uppercase tracking-widest mb-4">Success Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Real Results with ApexLoop
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Challenge Side */}
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">The Challenge</span>
                <h3 className="text-2xl font-bold text-primary-foreground mt-2 mb-4">{caseStudy.client}</h3>
                <p className="text-primary-foreground/70 mb-6">{caseStudy.challenge}</p>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-8">
                  <Quote className="w-6 h-6 text-red-400 mb-2" />
                  <p className="text-primary-foreground italic">"{caseStudy.quote}"</p>
                  <p className="text-sm text-primary-foreground/60 mt-2">— {caseStudy.quoteAuthor}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.resultsBefore.map(result => <div key={result.label} className="bg-gray-700/50 rounded-lg p-4">
                      <p className="text-xs text-gray-400 mb-1">Before</p>
                      <p className="text-xl font-bold text-red-400">{result.value}</p>
                      <p className="text-xs text-gray-400 mt-1">{result.label}</p>
                    </div>)}
                </div>
              </div>

              {/* Results Side */}
              <div>
                <span className="text-xs font-bold text-green-400 uppercase tracking-widest">The Transformation</span>
                <h3 className="text-2xl font-bold text-primary-foreground mt-2 mb-4">After ApexLoop Bootcamp</h3>
                <p className="text-primary-foreground/70 mb-6">3-week AI roleplay bootcamp with 30 persona-based simulations, objection drills, and real-call QA.</p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-8">
                  <Quote className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-primary-foreground italic">"{caseStudy.successQuote}"</p>
                  <p className="text-sm text-primary-foreground/60 mt-2">— {caseStudy.successAuthor}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.resultsAfter.map(result => <div key={result.label} className="bg-gray-700/50 rounded-lg p-4">
                      <p className="text-xs text-gray-400 mb-1">After</p>
                      <p className="text-xl font-bold text-green-400">{result.value}</p>
                      <p className="text-xs text-gray-400 mt-1">{result.label}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-6 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Built for <span className="gradient-text">Client-Facing Teams</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(industry => <div key={industry.name} className="bg-background rounded-xl p-6 border border-border hover:border-accent/30 transition-colors">
                <h3 className="font-semibold text-heading mb-2">{industry.name}</h3>
                <p className="text-sm text-body">{industry.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Traditional vs ApexLoop Comparison */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Traditional Coaching vs <span className="gradient-text">ApexLoop AI Coaching</span>
            </h2>
          </div>

          <div className="bg-background rounded-2xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="p-6 bg-muted">
                <p className="text-sm font-bold text-menu-header uppercase tracking-widest mb-4">Challenge</p>
              </div>
              <div className="p-6 bg-red-50 dark:bg-red-950/20">
                <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Manager Roleplays</p>
              </div>
              <div className="p-6 bg-accent/5">
                <p className="text-sm font-bold text-accent uppercase tracking-widest mb-4">ApexLoop AI</p>
              </div>
            </div>
            
            {[{
            challenge: "Coach to Rep Ratio",
            old: "1 manager : 8 reps",
            new: "1 AI coach : ∞ reps"
          }, {
            challenge: "Practice Frequency",
            old: "2-3 roleplays/month per rep",
            new: "Unlimited practice calls"
          }, {
            challenge: "Feedback Quality",
            old: "Generic feedback",
            new: "Hyper-specific, timestamped insights"
          }, {
            challenge: "Manager Time",
            old: "10-15 hrs/week",
            new: "1-2 hrs/week"
          }, {
            challenge: "Ramp Time",
            old: "6 month ramp time",
            new: "2 month ramp time"
          }].map((row, index) => <div key={row.challenge} className={`grid md:grid-cols-3 border-t border-border ${index % 2 === 0 ? 'bg-muted/30' : ''}`}>
                <div className="p-6">
                  <p className="font-medium text-heading">{row.challenge}</p>
                </div>
                <div className="p-6">
                  <p className="text-body">{row.old}</p>
                </div>
                <div className="p-6">
                  <p className="font-medium text-accent">{row.new}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-section-light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body">
              Everything you need to know about ApexLoop.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => <div key={index} className="bg-background border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-heading pr-4">{item.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-accent shrink-0" /> : <ChevronDown className="w-5 h-5 text-body shrink-0" />}
                </button>
                {openFaq === index && <div className="px-6 pb-6">
                    <p className="text-body leading-relaxed">{item.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background rounded-3xl p-12 md:p-16 border border-border shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Ready to Train Your Team Like Elite Athletes?
            </h2>
            <p className="text-body mb-8 max-w-lg mx-auto">
              Stop burning prospects on untrained reps. Get your team call-ready before the real call.
            </p>
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground px-8 border-0">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Full Sitemap */}
      <footer className="bg-section-dark py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo-s.png" alt="ApexLoop Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                <span className="font-bold text-xl text-primary-foreground">ApexLoop</span>
              </Link>
              <p className="text-sm text-primary-foreground/60">
                AI Sales Performance Enablement Platform. Train your sales team like elite athletes.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map(link => <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map(link => <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map(link => <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map(link => <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>)}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 ApexLoop AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-4 h-4 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-4 h-4 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}