import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import InHouse from "./pages/InHouse";
import Whisper from "./pages/Whisper";
import WhisperPrivacy from "./pages/WhisperPrivacy";
import WhisperTerms from "./pages/WhisperTerms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/in-house" element={<InHouse />} />
          <Route path="/whisper" element={<Whisper />} />
          <Route path="/whisper/privacy" element={<WhisperPrivacy />} />
          <Route path="/whisper/terms" element={<WhisperTerms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
