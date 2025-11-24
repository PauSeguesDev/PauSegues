interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

type GTagFn = (...args: any[]) => void;

interface Window {
  dataLayer: any[];
  gtag: GTagFn;
  ga_loaded?: boolean;
}