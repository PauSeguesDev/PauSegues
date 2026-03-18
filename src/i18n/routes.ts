export const languages = {
    ca: "CA",
    es: "ES",
    en: "EN"
} as const;

export type LanguageCode = keyof typeof languages;

export const navLabels = {
    home: {
        ca: 'Inici',
        es: 'Inicio',
        en: 'Home'
    },
    projects: {
        ca: 'Projectes',
        es: 'Proyectos',
        en: 'Projects'
    },
    contact: {
        ca: 'Contacte',
        es: 'Contacto',
        en: 'Contact'
    },
    legal: {
        ca: 'Avís Legal',
        es: 'Aviso Legal',
        en: 'Legal Notice'
    },
    privacy: {
        ca: 'Privacitat',
        es: 'Privacidad',
        en: 'Privacy'
    },
    cookies: {
        ca: 'Cookies',
        es: 'Cookies',
        en: 'Cookies'
    },
    notFound: {
        ca: 'No trobat',
        es: 'No encontrado',
        en: 'Not Found'
    }
} as const;

export const routes = {
    home: {
        ca: '/',
        es: '/es/',
        en: '/en/'
    },
    projects: {
        ca: '/projectes',
        es: '/es/proyectos',
        en: '/en/projects'
    },
    contact: {
        ca: '/contacte',
        es: '/es/contacto',
        en: '/en/contact'
    },
    legal: {
        ca: '/avis-legal',
        es: '/es/aviso-legal',
        en: '/en/legal-notice'
    },
    privacy: {
        ca: '/politica-privacitat',
        es: '/es/politica-privacidad',
        en: '/en/privacy-policy'
    },
    cookies: {
        ca: '/politica-cookies',
        es: '/es/politica-cookies',
        en: '/en/cookies-policy'
    },
    notFound: {
        ca: '/404',
        es: '/es/404',
        en: '/en/404'
    }
}
