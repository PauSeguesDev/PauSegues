// Llista de tipus d'input permesos
export const TypeInput = ["text", "textarea", "url", "file"] as const;

// Tipus derivat de la constant
export type DbFieldType = (typeof TypeInput)[number];

// Definició d’un camp i d’una taula
export interface DbField {
  name: string;
  type: DbFieldType;
}

export interface DbTable {
  name: string;
  fields: DbField[];
}

// Tipus de la llista de taules
export type DbTableType = DbTable[];
