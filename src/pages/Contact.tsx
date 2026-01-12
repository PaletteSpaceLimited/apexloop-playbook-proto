import { useState } from "react";
import { Zap, CheckCircle2, Snowflake, Flame, Lightbulb, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import MegaMenuNavigation from "@/components/navigation/MegaMenuNavigation";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    employees: "",
    source: "",
    problem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    toast.success("Thank you! We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <MegaMenuNavigation />
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-8">
              We've received your request. Our team will contact you within 24 hours to schedule your demo.
            </p>
            <a href="/">
              <Button className="gradient-primary-bg hover:opacity-90 text-primary-foreground">
                Back to Home
              </Button>
            </a>
          </div>
        </section>
      </div>
    );
  }

  const features = [
    {
      title: "Customized around your methodology",
      description: "Create roleplays around your talking points, training methodology, customer ICP, and more"
    },
    {
      title: "Meet learners (and admins) where they are",
      description: "Fits into your existing LMS, CMS or training portal. Seamless for admins and learners"
    },
    {
      title: "Your InfoSec team will thank you",
      description: "Your InfoSec team will thank you — strong privacy controls, data excluded from model training, user provisioning, and more."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MegaMenuNavigation />

      {/* Header */}
      <section className="py-12 px-6 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Talk to Sales
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary italic mb-3">
                Interactive AI Roleplays for your team
              </h2>
              <p className="text-muted-foreground text-lg">
                Leave your info and we'll be in touch shortly
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white border-2 border-primary/20 rounded-2xl px-5 py-3 shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <Snowflake className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Cold call</span>
                </div>
              </div>
              <div className="bg-white border-2 border-orange-200 rounded-2xl px-5 py-3 shadow-md hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-foreground">Inbound</span>
                </div>
              </div>
              <div className="bg-white border-2 border-purple-200 rounded-2xl px-5 py-3 shadow-md transform rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold text-foreground">Manager training</span>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Name<span className="text-red-500">*</span></Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-gray-300"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email<span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone #</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>
              </div>

              {/* Job Title & Company Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title<span className="text-red-500">*</span></Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Org<span className="text-red-500">*</span></Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>
              </div>

              {/* Number of employees */}
              <div className="space-y-2">
                <Label htmlFor="employees">Number of employees<span className="text-red-500">*</span></Label>
                <div className="relative">
                  <select
                    id="employees"
                    name="employees"
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none pr-10"
                    value={formData.employees}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
                </div>
              </div>

              {/* Where did you hear about us */}
              <div className="space-y-2">
                <Label htmlFor="source">Where did you hear about us?</Label>
                <div className="relative">
                  <select
                    id="source"
                    name="source"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none pr-10"
                    value={formData.source}
                    onChange={handleChange}
                  >
                    <option value="">Select one</option>
                    <option value="google">Google Search</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Referral</option>
                    <option value="conference">Conference/Event</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
                </div>
              </div>

              {/* Problem statement */}
              <div className="space-y-2">
                <Label htmlFor="problem">Problem statement</Label>
                <Textarea
                  id="problem"
                  name="problem"
                  placeholder="What problem are you trying to solve with ApexLoop?"
                  className="min-h-[100px] border-gray-300"
                  value={formData.problem}
                  onChange={handleChange}
                />
              </div>

              {/* Submit */}
              <Button type="submit" className="bg-gray-500 hover:bg-gray-600 text-white px-8">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 mt-12">
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
