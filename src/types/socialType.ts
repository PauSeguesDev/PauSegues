type SocialId = "x" | "instagram" | "github" | "linkedin" ;

type SocialName = "X" | "Instagram" | "GitHub" | "LinkedIn" ;

export interface Social {
  id: SocialId;
  name: SocialName;
  url: string;
  label: string;
  image: {
    logo: any;
    width: number;
    height: number;
  };
}
