type skillType = "frontend" | "backend" | "database" | "tools";

export type Skill = {
    id: number;
    name: string;
    icon_url: string;
    type: skillType;
}