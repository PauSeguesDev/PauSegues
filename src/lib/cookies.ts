import type { CookiesConsent } from '@/types/cookiesTypes';
import { COOKIE_EVENT_NAME } from '@/types/cookiesTypes';

const STORAGE_KEY = 'cookie_consent';

const defaultConsent: CookiesConsent = {
  necessary: true,
  analytics: false,
};

// Funció per LLEGIR
export const getCookieConsent = (): CookiesConsent => {
  if (typeof localStorage === 'undefined') return defaultConsent; // Per si s'executa al servidor (SSR)
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultConsent;

  try {
    return JSON.parse(stored);
  } catch (e) {
    return defaultConsent;
  }
};

// Funció per GUARDAR
export const setCookieConsent = (consent: CookiesConsent) => {
  if (typeof localStorage === 'undefined') return;

  // 1. Guardem al navegador
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));

  // 2. Avisem a la resta de la web que hi ha canvis
  window.dispatchEvent(new CustomEvent(COOKIE_EVENT_NAME, { detail: consent }));
};