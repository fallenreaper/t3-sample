import { PostHog } from "posthog-node";
import { PostHogProvider } from "posthog-js/react";

function serverSideAnalytics() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0
  });
  return posthogClient;
}

const analyticsServerClient = serverSideAnalytics()

export default analyticsServerClient;