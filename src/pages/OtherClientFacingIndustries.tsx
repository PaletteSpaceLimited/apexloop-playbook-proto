import { Link } from "react-router-dom";
import {
  ArrowRight,
  UsersRound,
  Users,
  Target,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Globe,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";
import { useState } from "react";

// Feature sections data
const featureSections = [
  {
    title: "Train Staff for Exceptional Client Interactions",
    description: "AI-driven roleplays simulate real client scenarios across industries—from hospitality to professional services—so your team can practice handling inquiries and building relationships.",
    icon: MessageSquare,
    imagePosition: "right" as const
  },
  {
    title: "Accelerate Onboarding Across Diverse Roles",
    description: "Whether onboarding customer service representatives, account managers, or client success specialists, ApexLoop provides consistent, scalable training that gets new hires productive faster.",
    icon: TrendingUp,
    imagePosition: "left" as const
  },
  {
    title: "Adapt to Industry-Specific Communication Needs",
    description: "From legal compliance in financial conversations to emotional intelligence in healthcare settings, ApexLoop adapts to your industry's unique requirements with customizable scenarios.",
    icon: Target,
    imagePosition: "right" as const
  },
  {
    title: "Measure and Improve Client Experience",
    description: "Transform your client experience through data-driven training improvements. ApexLoop's analytics identify skill gaps and correlate training performance with real-world satisfaction metrics.",
    icon: Award,
    imagePosition: "left" as const
  }
];

// FAQ data
const faqs = [
  {
    question: "What industries does ApexLoop support?",
    answer: "ApexLoop is designed to be flexible and adaptable to any client-facing industry. We currently support healthcare, legal services, real estate, hospitality, consulting, and many more. Our platform can be customized to match your specific industry terminology, scenarios, and compliance requirements."
  },
  {
    question: "How customizable are the training scenarios?",
    answer: "Highly customizable. You can create scenarios based on your actual client interactions, upload your company's communication guidelines, and even incorporate industry-specific regulations. Our team also works with you to develop custom AI personas that match your typical client profiles."
  },
  {
    question: "Can ApexLoop integrate with our existing training programs?",
    answer: "Absolutely. ApexLoop is designed to complement your existing training infrastructure. We offer LMS integrations, SSO support, and can align our training modules with your current curriculum to provide seamless, enhanced learning experiences."
  },
  {
    question: "How do you ensure training quality across different industries?",
    answer: "We work with industry experts to develop and validate our training content. Our AI models are continuously refined based on feedback from practitioners in each field, ensuring realistic and relevant training experiences that reflect current industry best practices."
  },
  {
    question: "What kind of support do you provide for implementation?",
    answer: "We offer comprehensive implementation support including dedicated customer success managers, custom scenario development, team training sessions, and ongoing optimization recommendations. Our goal is to ensure you see measurable improvements in client satisfaction and team performance."
  },
  {
    question: "Does ApexLoop train on my data?",
    answer: "No! ApexLoop AI does not train on your data. Our models are pre-trained on our own proprietary data sets. Your data and your clients' data remain secure and private."
  }
];

// Stats data
const stats = [
  { value: "60%", label: "Faster Skill Development" },
  { value: "45%", label: "Better Client Satisfaction" },
  { value: "3x", label: "More Practice Opportunities" }
];

export default function OtherClientFacingIndustries() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <UsersRound className="w-4 h-4" />
            <span className="text-sm font-medium">Industry Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6">
            Other Client-Facing Industries
          </h1>

          <p className="text-xl text-body mb-8 max-w-2xl mx-auto">
            From hospitality to professional services, empower your client-facing teams with realistic practice scenarios that build confidence and drive exceptional experiences.
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
            Join organizations across industries that are using ApexLoop to deliver exceptional client interactions and build lasting relationships.
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
