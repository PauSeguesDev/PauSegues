export interface CookiesConsent {
    necessary: boolean;
    analytics: boolean;
}

export const COOKIE_EVENT_NAME = 'cookie-consent-updated';