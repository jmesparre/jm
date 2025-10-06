"use client";

import { I18nextProvider } from 'react-i18next';
import i18n from '../../src/i18n'; // Import the centralized i18n instance
import { useEffect, useState } from 'react';

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
