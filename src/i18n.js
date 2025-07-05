import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Use http backend to load translations
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    debug: true,
    fallbackLng: 'es', // Fallback language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    backend: {
      // Path where resources are stored
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // Default namespace
    ns: 'common',
    defaultNS: 'common',
  });

export default i18n;
