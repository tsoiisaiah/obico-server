import i18n from 'i18next';

import baseEn from './locales/en.json';
import entBaseEn from './locales/ent_en.json';

import {language} from '@src/lib/page-context'

const getCurrentLanguage = () => {
  return language()
};


const currentLanguage = getCurrentLanguage()


const resources = {
  'en': {
    translation: {
      ...baseEn,
      ...entBaseEn
    }
  },

};

i18n
  .init({
    resources,
    lng: currentLanguage,
    fallbackLng: ['en'],
    interpolation: {
      escapeValue: false,
    },
    debug: true,
    nsSeparator:false
  });

export default i18n;
