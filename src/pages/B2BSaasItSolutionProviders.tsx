import { Link } from "react-router-dom";
import {
  ArrowRight,
  Laptop,
  Users,
  Zap,
  RefreshCcw,
  BookOpen,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Code,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";
import { useState } from "react";

// Feature sections data
const featureSections = [
  {
    title: "Reducing Rep Attrition",
    description: "High churn slows growth. ApexLoop helps reps ramp faster, gain confidence, and stay engaged with structured training and coaching that keeps them motivated and successful.",
    icon: Users,
    imagePosition: "right" as const
  },
  {
    title: "Faster, Most Effective Onboarding",
    description: "Get new reps selling weeks sooner with AI-driven roleplays, certifications, and real-world scenarios. Reduce time-to-productivity and accelerate revenue generation.",
    icon: Zap,
    imagePosition: "left" as const
  },
  {
    title: "Adapting to Constant Product Changes",
    description: "New features, new messaging — ApexLoop keeps reps updated with scalable, AI-powered training that evolves with your product. Never worry about outdated pitches again.",
    icon: RefreshCcw,
    imagePosition: "right" as const
  },
  {
    title: "Mastering Technical Product Knowledge",
    description: "Complex SaaS sales require deep knowledge. ApexLoop helps reps learn product details, integrations, and use cases through hands-on practice with realistic buyer scenarios.",
    icon: Code,
    imagePosition: "left" as const
  }
];

// FAQ data
const faqs = [
  {
    question: "Can ApexLoop be customized to my company's sales process?",
    answer: "Yes! ApexLoop supports custom roleplays for any ICP, AI scorecards for any sales methodology or messaging frameworks, and industry-specific objections tailored to SaaS and IT solutions."
  },
  {
    question: "How long does set-up and onboarding take?",
    answer: "Building your first bot and scorecard takes less than 10 minutes. Building out your personas and setting up modules and real call scoring take two weeks on average. Most customers see the value in the first 30 days."
  },
  {
    question: "What languages does ApexLoop support?",
    answer: "ApexLoop currently supports 25+ languages including English, Spanish, French, German, Italian, Portuguese, Chinese (Mandarin), Cantonese (HK), Japanese, Korean, and many more upon request."
  },
  {
    question: "Is ApexLoop an LMS?",
    answer: "No. ApexLoop is an AI sales coach that intelligently analyzes your sales calls and helps your reps practice the scenarios they struggle with the most."
  },
  {
    question: "Does ApexLoop train on my data?",
    answer: "No! ApexLoop AI does not train on your data. Our models are pre-trained on our own proprietary data sets. Your data remains secure and private."
  },
  {
    question: "Does ApexLoop offer a free trial?",
    answer: "Yes! We have a free interactive demo with a variety of different pre-built AI personas available on our website. To build your own custom bot, book a demo with our team."
  }
];

// Stats data
const stats = [
  { value: "50%", label: "Faster Rep Onboarding" },
  { value: "35%", label: "Increase in Win Rates" },
  { value: "40%", label: "Reduction in Rep Attrition" }
];

export default function B2BSaasItSolutionProviders() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Laptop className="w-4 h-4" />
            <span className="text-sm font-medium">Industry Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6">
            B2B SaaS & IT Solution Providers
          </h1>

          <p className="text-xl text-body mb-8 max-w-2xl mx-auto">
            SaaS sales moves fast — reps need to ramp quickly, adapt to constant product changes, and master technical selling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground border-0">
                Try free demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Book a demo
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            No password or credit card required!
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      {featureSections.map((feature, index) => (
        <section 
          key={index} 
          className={`py-16 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-section-light'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              feature.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
            }`}>
              {/* Content */}
              <div className={feature.imagePosition === 'left' ? 'lg:col-start-2' : ''}>
                <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg text-body leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Visual placeholder */}
              <div className={`bg-muted/50 rounded-2xl p-8 border border-border ${
                feature.imagePosition === 'left' ? 'lg:col-start-1' : ''
              }`}>
                <div className="aspect-video bg-background rounded-lg flex items-center justify-center shadow-sm">
                  <feature.icon className="w-16 h-16 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-background hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-heading pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-body bg-background">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Ready to try our AI roleplay?
          </h2>
          <p className="text-body mb-8 max-w-lg mx-auto">
            Join hundreds of SaaS sales teams already using ApexLoop to accelerate their growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="lg" className="gradient-primary-bg hover:opacity-90 text-primary-foreground border-0">
                Try free demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Book a demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo-s.png" alt="ApexLoop Logo" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-heading">ApexLoop</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Palette Space. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-heading transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-heading transition-colors">Terms</a>
            <a href="https://palettespace.org" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-heading transition-colors">palettespace.org</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
