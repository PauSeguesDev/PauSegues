import type { Social } from "@/types/socialType";

import X from "@/icons/x.svg";
import Instagram from "@/icons/instagram.svg";
import GitHub from "@/icons/github.svg";

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
];
