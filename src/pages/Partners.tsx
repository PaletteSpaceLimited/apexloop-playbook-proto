import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import mediaExposureImg from "@/assets/media-exposure.png";
import partnersClientsImg from "@/assets/partners-clients.png";

const footerLinks = {
  product: [
    { label: "AI Roleplays", href: "/solutions/ai-sales-roleplays" },
    { label: "Call Scoring", href: "/solutions/ai-real-call-scoring" },
    { label: "AI Coaching", href: "/solutions/ai-coaching" },
    { label: "Integrations", href: "/solutions/integrations" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "GDPR", href: "/gdpr" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
    { label: "Demos", href: "/resources/demos" },
    { label: "Community", href: "/community" },
  ],
};

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
            Our Partners & Media
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Trusted by leading organizations and featured in major media outlets across Asia Pacific.
          </p>
        </div>
      </section>

      {/* Partners & Clients Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-12">
            OUR PARTNERS & CLIENTS
          </h2>
          <div className="flex justify-center">
            <img 
              src={partnersClientsImg} 
              alt="Our Partners and Clients including HKSTP, Cyberport, AWS, University of Hong Kong, HKDAS, Zhejiang University, CityU, HK TECH 300, EPFL, and more" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Media Exposure Section */}
      <section className="py-16 px-6 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-12">
            MEDIA EXPOSURE
          </h2>
          <div className="flex justify-center">
            <img 
              src={mediaExposureImg} 
              alt="Media Exposure including 香港01, hket, 香港商報, Yahoo Finance, 信報, 星島日報, 明報, 大公報" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-section-dark py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo-s.png" alt="ApexLoop Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                <span className="font-bold text-xl text-primary-foreground">ApexLoop</span>
              </Link>
              <p className="text-sm text-primary-foreground/60">
                AI Sales Performance Enablement Platform. Train your sales team like elite athletes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
    </div>
  );
}
