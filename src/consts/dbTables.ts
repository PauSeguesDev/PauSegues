import type { DbTableType } from "@/types/dbTypes";

export const dbTables: DbTableType = [
  {
    name: "projects",
    fields: [
      { name: "title_ca", type: "text" },
      { name: "title_es", type: "text" },
      { name: "title_en", type: "text" },
      { name: "description_ca", type: "textarea" },
      { name: "description_es", type: "textarea" },
      { name: "description_en", type: "textarea" },
      { name: "link", type: "url" },
      { name: "image", type: "file" },
    ],
  },
  {
    name: "skills",
    fields: [
      { name: "name", type: "text" },
      { name: "type", type: "select", options: ["frontend", "backend", "database", "tools"] },
      { name: "icon_url", type: "text" },
    ],
  },
];
