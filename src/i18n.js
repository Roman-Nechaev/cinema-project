import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import trsEn from './locales/en/translation.json';
import trsRu from './locales/ru/translation.json';
import trsUk from './locales/uk/translation.json';

const localStorageLang = localStorage.getItem('i18nextLng');
let firstLang = 'en';

const initialLang = Lang => {
  return localStorageLang ? localStorageLang : Lang;
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: trsRu,
      },
      en: {
        translation: trsEn,
      },
      uk: {
        translation: trsUk,
      },
    },

    fallbackLng: initialLang(firstLang),
    // debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
