import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import CallHistory from "./pages/CallHistory";
import ScoringReport from "./pages/ScoringReport";
import Settings from "./pages/Settings";
import FeaturePage from "./pages/FeaturePage";
import OnboardingCertifications from "./pages/OnboardingCertifications";
import ChangeManagement from "./pages/ChangeManagement";
import PreCallPrep from "./pages/PreCallPrep";
import QADealAssessment from "./pages/QADealAssessment";
import PublicSpeaking from "./pages/PublicSpeaking";
import SuccessStories from "./pages/SuccessStories";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import InsuranceFinancialServices from "./pages/InsuranceFinancialServices";
import CustomerSupportSuccessTeams from "./pages/CustomerSupportSuccessTeams";
import B2BSaasItSolutionProviders from "./pages/B2BSaasItSolutionProviders";
import EducationTrainingProviders from "./pages/EducationTrainingProviders";
import RecruitmentTalentConsultingFirms from "./pages/RecruitmentTalentConsultingFirms";
import PublicSectorNgos from "./pages/PublicSectorNgos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<CallHistory />} />
          <Route path="/report/:id" element={<ScoringReport />} />
          <Route path="/settings" element={<Settings />} />
          {/* Dedicated solution pages */}
          <Route path="/solutions/onboarding-certifications" element={<OnboardingCertifications />} />
          <Route path="/solutions/change-management" element={<ChangeManagement />} />
          <Route path="/solutions/pre-call-prep" element={<PreCallPrep />} />
          <Route path="/solutions/qa-deal-assessment" element={<QADealAssessment />} />
          <Route path="/solutions/public-speaking" element={<PublicSpeaking />} />
          <Route path="/solutions/insurance-financial-services" element={<InsuranceFinancialServices />} />
          <Route path="/solutions/customer-support-success-teams" element={<CustomerSupportSuccessTeams />} />
          <Route path="/solutions/b2b-saas-it-solution-providers" element={<B2BSaasItSolutionProviders />} />
          <Route path="/solutions/education-training-providers" element={<EducationTrainingProviders />} />
          <Route path="/solutions/recruitment-talent-consulting-firms" element={<RecruitmentTalentConsultingFirms />} />
          <Route path="/solutions/public-sector-ngos" element={<PublicSectorNgos />} />
          {/* Dedicated pages */}
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources/partners" element={<Partners />} />
          {/* Dynamic feature pages */}
          <Route path="/solutions/:slug" element={<FeaturePage />} />
          <Route path="/resources/:slug" element={<FeaturePage />} />
          <Route path="/enterprise" element={<FeaturePage />} />
          <Route path="/careers" element={<FeaturePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
