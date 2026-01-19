'use client';

import { ReactNode } from 'react';

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  // Search functionality can be added later with KBar or similar
  return <>{children}</>;
}
