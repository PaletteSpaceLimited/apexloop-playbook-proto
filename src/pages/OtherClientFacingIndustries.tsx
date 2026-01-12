import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award,
  ChevronDown,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

const featureSections = [
  {
    title: "Train Staff for Exceptional Client Interactions",
    description: "Every client-facing role requires unique communication skills. ApexLoop's AI-powered roleplay simulates real client scenarios across industries—from hospitality to professional services—so your team can practice handling inquiries, complaints, and relationship-building conversations with confidence.",
    icon: Users,
    benefits: [
      "Industry-specific conversation simulations",
      "Practice handling difficult client situations",
      "Build empathy and active listening skills",
      "Instant feedback on communication effectiveness"
    ],
    imagePosition: "right" as const
  },
  {
    title: "Accelerate Onboarding Across Diverse Roles",
    description: "Whether you're onboarding customer service representatives, account managers, or client success specialists, ApexLoop provides consistent, scalable training that gets new hires productive faster while maintaining quality standards.",
    icon: TrendingUp,
    benefits: [
      "Role-specific training pathways",
      "Reduce time-to-competency by 50%",
      "Consistent training quality at scale",
      "Track individual progress and readiness"
    ],
    imagePosition: "left" as const
  },
  {
    title: "Adapt to Industry-Specific Communication Needs",
    description: "From legal compliance in financial conversations to emotional intelligence in healthcare settings, ApexLoop adapts to your industry's unique requirements. Create custom scenarios that reflect your specific client interactions and regulatory requirements.",
    icon: Target,
    benefits: [
      "Customizable industry scenarios",
      "Compliance-focused training modules",
      "Cultural sensitivity training",
      "Multi-language support for global teams"
    ],
    imagePosition: "right" as const
  },
  {
    title: "Measure and Improve Client Experience",
    description: "Transform your client experience through data-driven training improvements. ApexLoop's analytics identify skill gaps, track improvement over time, and correlate training performance with real-world client satisfaction metrics.",
    icon: Award,
    benefits: [
      "Comprehensive performance analytics",
      "Identify team-wide skill gaps",
      "Link training to business outcomes",
      "Continuous improvement recommendations"
    ],
    imagePosition: "left" as const
  }
];

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
  }
];

const stats = [
  { value: "60%", label: "Faster Skill Development" },
  { value: "45%", label: "Better Client Satisfaction" },
  { value: "3x", label: "More Practice Opportunities" },
  { value: "40%", label: "Reduced Training Costs" }
];

export default function OtherClientFacingIndustries() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Client-Facing Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Elevate Every Client Interaction with{" "}
              <span className="text-primary">AI-Powered Training</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From hospitality to professional services, empower your client-facing teams with realistic practice scenarios that build confidence and drive exceptional experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {featureSections.map((section, index) => (
        <section 
          key={index} 
          className={`py-20 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${section.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
                  <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl">
                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                      <section.icon className="w-20 h-20 text-muted-foreground/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Organizations using ApexLoop see measurable improvements in client satisfaction and team performance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 bg-card">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Client Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join organizations across industries that are using ApexLoop to deliver exceptional client interactions and build lasting relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo-s.png" alt="ApexLoop" className="h-8" />
              <span className="font-bold text-xl">ApexLoop</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link to="/partners" className="hover:text-primary transition-colors">Partners</Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 ApexLoop. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
