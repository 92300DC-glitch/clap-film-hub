import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import Index from "./pages/Index";
import Participate from "./pages/Participate";

import Ceremony from "./pages/Ceremony";
import Prizes from "./pages/Prizes";
import Education from "./pages/Education";
import Partners from "./pages/Partners";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Archives from "./pages/Archives";
import ArchiveEdition from "./pages/ArchiveEdition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/participer" element={<Participate />} />
            
            <Route path="/ceremonie" element={<Ceremony />} />
            <Route path="/prix" element={<Prizes />} />
            <Route path="/education" element={<Education />} />
            <Route path="/partenaires" element={<Partners />} />
            <Route path="/presse" element={<Press />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/archives/:year" element={<ArchiveEdition />} />
            <Route path="/confidentialite" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;
