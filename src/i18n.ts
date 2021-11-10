import i18n, { Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import spanish from './assets/locale/es.json';
import english from './assets/locale/en.json';
import portuguese from './assets/locale/pt.json';

const resources: Resource = {
  en: {
    translation: {
      ...english,
    },
  },
  pt: {
    translation: {
      ...portuguese,
    },
  },
  es: {
    translation: {
      ...spanish,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    supportedLngs: ['pt', 'en', 'es'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources,
  });

export default i18n;
