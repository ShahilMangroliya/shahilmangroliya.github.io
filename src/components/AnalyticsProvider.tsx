import { useEffect } from "react";
import { analytics, installErrorHandlers } from "@/lib/analytics";
import { usePageTracking } from "@/hooks/use-page-tracking";
import { useAutoInstrument } from "@/hooks/use-auto-instrument";

/**
 * Boots analytics once on the client and wires all auto-instrumentation.
 * Renders nothing. Must be mounted inside the router (it uses route-aware
 * hooks). Effects never run during SSR/prerender, so this is inert on the
 * server and pulls in no Firebase code there.
 */
const AnalyticsProvider = (): null => {
  usePageTracking();
  useAutoInstrument();

  useEffect(() => {
    void analytics.init();
    return installErrorHandlers();
  }, []);

  return null;
};

export default AnalyticsProvider;
