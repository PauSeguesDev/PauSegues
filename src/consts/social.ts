import type { Social } from "@/types/socialType";

import X from "@/icons/x.svg";
import Instagram from "@/icons/instagram.svg";
import GitHub from "@/icons/github.svg";
import Linkedin from "@/icons/Linkedin.svg";

export const SOCIAL: Social[] = [
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
