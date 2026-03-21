/**
 * i18n Utilities
 * Handles language detection from the URL and provides a helper function
 * to retrieve translated strings from the local JSON files.
 */
import ca from './locales/ca.json';
import es from './locales/es.json';
import en from './locales/en.json';

/** Dictionary of all available translation files */
const languages = {
    ca,
    es,
    en
};

/**
 * Detects the current language based on the URL pathname.
 * Example: /es/projects -> 'es'
 * Example: /projectes -> 'ca' (default)
 * * @param {URL} url - The current Astro.url object.
 * @returns {keyof typeof languages} The language code (ca, es, or en).
 */
export function getLangFromUrl(url: URL) {
    // Split the path and take the first segment (e.g., "", "es", or "en")
    const [, lang] = url.pathname.split('/');
    
    if (lang in languages) {
        return lang as keyof typeof languages;
    }
    
    // Default to Catalan if no valid language prefix is found
    return 'ca';
}

/**
 * Translation Hook Factory
 * Returns a function 't' that can look up nested keys in the JSON files.
 * * @param {keyof typeof languages} lang - The active language code.
 * @returns {Function} The 't' translation function.
 */
export function useTranslations(lang: keyof typeof languages) {
  /**
   * Translates a specific key using dot notation.
   * @param {string} key - The path to the string (e.g., 'pages.home.title').
   */
  return function t(key: string) {
    const keys = key.split('.');
    let result: any = languages[lang];

    // Traverse the JSON object based on the dots in the key
    for (const k of keys) {
      if (result[k]) {
        result = result[k];
      } else {
        // Fallback: If the key isn't found, return the key string itself
        // so the developer knows a translation is missing.
        return key; 
      }
    }
    return result;
  }
}