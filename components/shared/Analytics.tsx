'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { siteConfig } from '@/data/config/site.settings';

export function AnalyticsWrapper() {
  if (siteConfig.disableAnalytics) {
    return null;
  }

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
