import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube } from "lucide-react";

// Partner logos
import hkstpLogo from "@/assets/partners/hkstp.png";
import cyberportLogo from "@/assets/partners/cyberport.png";
import awsLogo from "@/assets/partners/aws.png";
import cityuLogo from "@/assets/partners/cityu.webp";
import hktech300Logo from "@/assets/partners/hktech300.png";
import itcLogo from "@/assets/partners/itc.png";
import alibabaLogo from "@/assets/partners/alibaba.png";
import hktdcLogo from "@/assets/partners/hktdc.png";

// Media logos
import hk01Logo from "@/assets/media/hk01.png";
import hketLogo from "@/assets/media/hket.png";
import hkcommercialLogo from "@/assets/media/hkcommercial.png";
import yahooFinanceLogo from "@/assets/media/yahoo-finance.png";
import hkejLogo from "@/assets/media/hkej.png";
import singtaoLogo from "@/assets/media/singtao.png";
import mingpaoLogo from "@/assets/media/mingpao.png";
import takungpaoLogo from "@/assets/media/takungpao.png";

const partnerLogos = [
  { src: hkstpLogo, alt: "HKSTP" },
  { src: cyberportLogo, alt: "Cyberport" },
  { src: awsLogo, alt: "AWS" },
  { src: cityuLogo, alt: "City University of Hong Kong" },
  { src: hktech300Logo, alt: "HK TECH 300" },
  { src: itcLogo, alt: "Innovation and Technology Commission" },
  { src: alibabaLogo, alt: "Alibaba Entrepreneurs Fund" },
  { src: hktdcLogo, alt: "HKTDC" },
];

const mediaLogos = [
  { src: hk01Logo, alt: "香港01" },
  { src: hketLogo, alt: "香港經濟日報" },
  { src: hkcommercialLogo, alt: "香港商報" },
  { src: yahooFinanceLogo, alt: "Yahoo Finance" },
  { src: hkejLogo, alt: "信報財經新聞" },
  { src: singtaoLogo, alt: "星島日報" },
  { src: mingpaoLogo, alt: "明報" },
  { src: takungpaoLogo, alt: "大公報" },
];

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


      {/* Partners & Clients Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-12">
            OUR PARTNERS & CLIENTS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Exposure Section */}
      <section className="py-16 px-6 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-12">
            MEDIA EXPOSURE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {mediaLogos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
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
