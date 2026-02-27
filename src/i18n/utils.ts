import ca from './locales/ca.json';
import es from './locales/es.json';
import en from './locales/en.json';

const languages = {
    ca,
    es,
    en
};

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return 'ca';
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    const keys = key.split('.');
    let result: any = languages[lang];

    for (const k of keys) {
      if (result[k]) {
        result = result[k];
      } else {
        return key; 
      }
    }
    return result;
  }
}