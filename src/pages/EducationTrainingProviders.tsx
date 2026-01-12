import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Scale,
  Sparkles,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";
import { useState } from "react";

// Feature sections data
const featureSections = [
  {
    title: "Reinforce Your Methodologies",
    description: "AI-driven roleplays, scorecards, and feedback ensure learners apply what they learn. Bridge the gap between knowledge and practice with realistic scenarios.",
    icon: BookOpen,
    imagePosition: "right" as const
  },
  {
    title: "Scale Without Losing Impact",
    description: "Deliver coaching at scale with automated assessments, progress tracking, and real-time feedback. Reach more learners while maintaining quality and personalization.",
    icon: Scale,
    imagePosition: "left" as const
  },
  {
    title: "Stand Out With AI-Driven Training",
    description: "Offer AI-powered coaching and analytics to differentiate your programs and attract more clients. Demonstrate measurable outcomes with data-driven insights.",
    icon: Sparkles,
    imagePosition: "right" as const
  },
  {
    title: "Lead as an AI Training Innovator",
    description: "Be the trainer who embraces the future. Integrate cutting-edge technology into your training programs before your competitors do and position yourself as an industry leader.",
    icon: Lightbulb,
    imagePosition: "left" as const
  }
];

// FAQ data
const faqs = [
  {
    question: "Can ApexLoop be customized to my training methodology?",
    answer: "Yes! ApexLoop supports custom roleplays for any learner persona, AI scorecards for any training methodology or frameworks, and industry-specific scenarios tailored to your curriculum."
  },
  {
    question: "How long does set-up and onboarding take?",
    answer: "Building your first bot and scorecard takes less than 10 minutes. Building out your personas and setting up modules and assessments take two weeks on average. Most training providers see the value in the first 30 days."
  },
  {
    question: "What languages does ApexLoop support?",
    answer: "ApexLoop currently supports 25+ languages including English, Spanish, French, German, Italian, Portuguese, Chinese (Mandarin), Cantonese (HK), Japanese, Korean, and many more upon request."
  },
  {
    question: "Is ApexLoop an LMS?",
    answer: "No. ApexLoop is an AI coach that intelligently analyzes conversations and helps learners practice the scenarios they struggle with the most. It complements your existing LMS."
  },
  {
    question: "Does ApexLoop train on my data?",
    answer: "No! ApexLoop AI does not train on your data. Our models are pre-trained on our own proprietary data sets. Your data and your clients' data remain secure and private."
  },
  {
    question: "Can I white-label ApexLoop for my clients?",
    answer: "Yes! We offer white-label options for training providers who want to offer ApexLoop as part of their own branded training solutions. Contact us to learn more about partnership opportunities."
  }
];

// Stats data
const stats = [
  { value: "3x", label: "More Practice Sessions per Learner" },
  { value: "60%", label: "Better Knowledge Retention" },
  { value: "45%", label: "Faster Skill Development" }
];

export default function EducationTrainingProviders() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Industry Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6">
            Education & Training Providers
          </h1>

          <p className="text-xl text-body mb-8 max-w-2xl mx-auto">
            Training providers need to scale their expertise, reinforce methodologies, and stay ahead of industry trends with innovative solutions.
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
            Join hundreds of training providers already using ApexLoop to enhance their programs.
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
