import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS Videos`.then(() => {
//   console.log("Apagada");
// });

sql`
  CREATE TABLE Videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log("Tabela criada");
});