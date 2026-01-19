'use client';

import { siteConfig } from '@/data/config/site.settings';

export function AnalyticsWrapper() {
  // Vercel Analytics is enabled by default via next.config.js
  // Add other analytics providers here if needed
  if (siteConfig.disableAnalytics) {
    return null;
  }

  return null;
}
