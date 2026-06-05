import { Routes, Route } from "react-router-dom";
import ScrollProgress from "./components/ScrollProgress";
import AnalyticsProvider from "./components/AnalyticsProvider";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <>
    <ScrollProgress />
    <AnalyticsProvider />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default AppRoutes;
