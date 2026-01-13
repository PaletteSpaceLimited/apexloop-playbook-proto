import { Link } from "react-router-dom";
import {
  Zap,
  Bot,
  BarChart3,
  MessageSquare,
  HeadphonesIcon,
  ClipboardCheck,
  GraduationCap,
  RefreshCcw,
  Phone,
  Search,
  Mic,
  Monitor,
  School,
  Headphones,
  Building2,
  PlayCircle,
  BookOpen,
  Trophy,
  Handshake,
  ArrowRight,
  Menu,
  X,
  Shield,
  UserCheck,
  Laptop,
  Briefcase,
  GraduationCap as Education,
  Landmark,
  UsersRound
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

// Solutions Menu Data
const productItems = [
  { title: "AI Sales Roleplays", slug: "ai-sales-roleplays", icon: Bot, description: "Practice with AI buyers", externalUrl: "https://app.apexloopai.com/dashboard" },
  { title: "AI Real Call Scoring", slug: "ai-real-call-scoring", icon: BarChart3, description: "Score your actual calls", externalUrl: "https://app.apexloopai.com/dashboard/history" },
  { title: "AI Coaching", slug: "ai-coaching", icon: MessageSquare, description: "Personalized AI coaching", externalUrl: "https://app.apexloopai.com" },
  { title: "AI Post-Sales Roleplays", slug: "ai-post-sales-roleplays", icon: HeadphonesIcon, description: "Customer success training" },
];

const useCaseItems = [
  { title: "Onboarding & Certifications", slug: "onboarding-certifications", icon: GraduationCap },
  { title: "Change Management", slug: "change-management", icon: RefreshCcw },
  { title: "Pre-Call Prep", slug: "pre-call-prep", icon: Phone },
  { title: "QA & Deal Assessment", slug: "qa-deal-assessment", icon: Search },
  { title: "Public Communication", slug: "public-speaking", icon: Mic },
];

const industryItems = [
  { title: "Insurance & Financial Services", slug: "insurance-financial-services", icon: Shield },
  { title: "Customer Support & Success Teams", slug: "customer-support-success-teams", icon: UserCheck },
  { title: "B2B SaaS & IT Solution Providers", slug: "b2b-saas-it-solution-providers", icon: Laptop },
  { title: "Recruitment & Talent Consulting Firms", slug: "recruitment-talent-consulting-firms", icon: Briefcase },
  { title: "Education & Training Providers", slug: "education-training-providers", icon: Education },
  { title: "Public Sector & NGOs", slug: "public-sector-ngos", icon: Landmark },
  { title: "Other Client-Facing Industries", slug: "other-client-facing-industries", icon: UsersRound },
];

// Resources Menu Data
const resourceItems = [
  {
    title: "Blog",
    slug: "blog",
    icon: BookOpen,
    description: "Stay up to date with the latest in AI coaching"
  },
  {
    title: "Partners",
    slug: "partners",
    icon: Handshake,
    description: "Want to become a partner? Join us!"
  },
];

export default function MegaMenuNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mr-10">
            <img src="/logo-s.png" alt="ApexLoop Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-xl text-heading">ApexLoop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Solutions Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-body hover:text-heading bg-transparent font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1150px] p-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Column 1: Product */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-menu-header mb-4">Product</h4>
                          <ul className="space-y-1">
                            {productItems.map((item) => (
                              <li key={item.slug}>
                                <NavigationMenuLink asChild>
                                  {item.externalUrl ? (
                                    <a
                                      href={item.externalUrl}
                                      className="flex items-center gap-3 py-2 rounded-md hover:bg-muted transition-colors group"
                                    >
                                      <item.icon className="w-4 h-4 text-menu-header group-hover:text-accent" />
                                      <span className="text-sm font-medium text-body group-hover:text-accent">{item.title}</span>
                                    </a>
                                  ) : (
                                    <Link
                                      to={`/solutions/${item.slug}`}
                                      className="flex items-center gap-3 py-2 rounded-md hover:bg-muted transition-colors group"
                                    >
                                      <item.icon className="w-4 h-4 text-menu-header group-hover:text-accent" />
                                      <span className="text-sm font-medium text-body group-hover:text-accent">{item.title}</span>
                                    </Link>
                                  )}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: Use Cases */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-menu-header mb-4">Use Cases</h4>
                          <ul className="space-y-1">
                            {useCaseItems.map((item) => (
                              <li key={item.slug}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={`/solutions/${item.slug}`}
                                    className="flex items-center gap-3 py-2 rounded-md hover:bg-muted transition-colors group whitespace-nowrap"
                                  >
                                    <item.icon className="w-4 h-4 text-menu-header group-hover:text-accent shrink-0" />
                                    <span className="text-sm font-medium text-body group-hover:text-accent">{item.title}</span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3: Industries */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-menu-header mb-4">Industries</h4>
                          <ul className="space-y-1">
                            {industryItems.map((item) => (
                              <li key={item.slug}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={`/solutions/${item.slug}`}
                                    className="flex items-center gap-3 py-2 rounded-md hover:bg-muted transition-colors group whitespace-nowrap"
                                  >
                                    <item.icon className="w-4 h-4 text-menu-header group-hover:text-accent shrink-0" />
                                    <span className="text-sm font-medium text-body group-hover:text-accent">{item.title}</span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 4: Featured Card */}
                        <div className="bg-accent/10 rounded-xl p-5">
                          <h4 className="text-sm font-semibold text-heading mb-2">Practice Recommendations</h4>
                          <p className="text-xs text-body mb-4">
                            Get personalized practice scenarios based on your performance data.
                          </p>
                          <div className="bg-background rounded-lg h-24 mb-4 flex items-center justify-center border border-border overflow-hidden">
                            <div className="w-full h-full gradient-primary-bg opacity-20" />
                            <Bot className="w-10 h-10 text-accent absolute" />
                          </div>
                          <a href="https://app.apexloopai.com/dashboard">
                            <Button size="sm" className="w-full gradient-primary-bg hover:opacity-90 text-primary-foreground border-0">
                              Try it now
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple Links */}
                <NavigationMenuItem>
                  <Link to="/pricing" className="px-4 py-2 text-sm font-medium text-body hover:text-accent transition-colors">
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/success-stories" className="px-4 py-2 text-sm font-medium text-body hover:text-accent transition-colors">
                    Success Stories
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>

            {/* Resources Dropdown - Separate from NavigationMenu to prevent conflicts */}
            <div className="relative group/resources">
              <button className="group/btn inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-body transition-colors hover:bg-[hsl(215,80%,80%)] hover:text-black focus:bg-[hsl(215,80%,80%)] focus:text-black focus:outline-none">
                Resources
                <svg className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover/resources:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1.5 w-[280px] p-6 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover/resources:opacity-100 group-hover/resources:visible transition-all z-50">
                <h4 className="text-xs font-bold uppercase tracking-widest text-menu-header mb-4">Resources</h4>
                <ul className="space-y-1">
                  {resourceItems.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/resources/${item.slug}`}
                        className="flex items-center gap-3 py-2 rounded-md hover:bg-muted transition-colors group/item"
                      >
                        <item.icon className="w-4 h-4 text-menu-header group-hover/item:text-accent" />
                        <span className="text-sm font-medium text-body group-hover/item:text-accent">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <a href="https://app.apexloopai.com/login">
              <Button variant="ghost" size="sm" className="text-body hover:text-heading">
                Sign In
              </Button>
            </a>
            <a href="https://app.apexloopai.com/dashboard">
              <Button size="sm" className="gradient-primary-bg hover:opacity-90 text-primary-foreground border-0">
                Try it now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="sm" className="gradient-primary-bg hover:opacity-90 text-primary-foreground border-0">
                Book a demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-heading" />
            ) : (
              <Menu className="w-6 h-6 text-heading" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-menu-header">Solutions</p>
              {productItems.slice(0, 3).map((item) => (
                <Link
                  key={item.slug}
                  to={`/solutions/${item.slug}`}
                  className="block py-2 text-sm text-body hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <Link to="/pricing" className="block py-2 text-sm font-medium text-body hover:text-accent" onClick={() => setMobileOpen(false)}>
                Pricing
              </Link>
              <Link to="/success-stories" className="block py-2 text-sm font-medium text-body hover:text-accent" onClick={() => setMobileOpen(false)}>
                Success Stories
              </Link>
            </div>
            <div className="pt-4 border-t border-border space-y-2">
              <a href="https://app.apexloopai.com/login" onClick={() => setMobileOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-body">Log in</Button>
              </a>
              <a href="https://app.apexloopai.com/dashboard" onClick={() => setMobileOpen(false)}>
                <Button className="w-full gradient-primary-bg text-primary-foreground">Try it now</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
