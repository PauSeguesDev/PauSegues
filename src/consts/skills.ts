type skillGroup = "frontend" | "backend" | "database" | "tools";

export type Skill = {
    name: string;
    icon_url: string;
}

export type SkillGroup = {
    id: number;
    name: string;
    skills: Skill[];
}

export const SKILLS: SkillGroup[] = [
    {
        id: 1,
        name: "Frontend",
        skills: [
            {
                name: "HTML",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            },
            {
                name: "CSS",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            },
            {
                name: "JavaScript",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            },
            {
                name: "Astro",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
            },
            {
                name: "Tailwind",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
                name: "Angular",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
            },
            {
                name: "Vue",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
            }
        ]
    },
    {
        id: 2,
        name: "Backend",
        skills: [
            {
                name: "Python",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            },
            {
                name: "Node.js",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            },
            {
                name: "Django",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
            },
        ]
    },
    {
        id: 3,
        name: "Database",
        skills: [
            {
                name: "Supabase",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
            },
            {
                name: "Firebase",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
            },
            {
                name: "MongoDB",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            },
        ]
    },
    {
        id: 4,
        name: "Tools",
        skills: [
            {
                name: "Git",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
                name: "GitHub",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            },
            {
                name: "VSCode",
                icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
            },
        ]
    },
]