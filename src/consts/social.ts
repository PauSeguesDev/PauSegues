/**
 * Social Media Configuration
 * Defines the data structure and links for all social media integrations.
 * Imports SVGs as components for optimized inline rendering.
 */
import X from "@/icons/x.svg";
import Instagram from "@/icons/instagram.svg";
import GitHub from "@/icons/github.svg";
import Linkedin from "@/icons/Linkedin.svg";

/** Restricted list of supported social media IDs */
type SocialId = "x" | "instagram" | "github" | "linkedin" ;

/** Restricted list of supported social media display names */
type SocialName = "X" | "Instagram" | "GitHub" | "LinkedIn" ;

/**
 * Social Media Interface
 * @property {SocialId} id - Internal identifier.
 * @property {SocialName} name - Formal name of the platform.
 * @property {string} url - External link to the profile.
 * @property {string} label - Accessibility text for screen readers (aria-label).
 * @property {object} image - Contains the component-ized logo and dimensions.
 */
export interface SocialType {
  id: SocialId;
  name: SocialName;
  url: string;
  label: string;
  image: {
    logo: any; // The SVG component
    width: number;
    height: number;
  };
}

/**
 * Global Social Media Registry
 * Used across the Hero, Footer, and Contact sections.
 */
export const SOCIAL: SocialType[] = [
  {
    id: "x",
    name: "X",
    url: "https://x.com/pau_segues",
    label: "Visit my X profile",
    image: {
      logo: X,
      width: 200,
      height: 200,
    },
  },

  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/pau_segues/",
    label: "Visit my Instagram profile",
    image: {
      logo: Instagram,
      width: 200,
      height: 200,
    },
  },

  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/PaAu5",
    label: "Visit my GitHub profile",
    image: {
      logo: GitHub,
      width: 200,
      height: 200,
    },
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pau-segu%C3%A9s-vitutia-29734339a/",
    label: "Visit my LinkedIn profile",
    image: {
      logo: Linkedin,
      width: 200,
      height: 200,
    },
  },
];