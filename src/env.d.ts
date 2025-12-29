interface ImportMeta {
  readonly env: ImportMetaEnv
}

type GTagFn = (...args: any[]) => void;

interface Window {
  dataLayer: any[];
  gtag: GTagFn;
  ga_loaded?: boolean;
}