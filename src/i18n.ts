import i18n, { Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import english from './locale/es.json';
import spanish from './locale/en.json';
import portuguese from './locale/pt.json';

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
    supportedLngs: ['pt', 'en', 'es'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources,
  });

export default i18n;
