// create-table.js
import { sql } from "./db.js";

(async () => {
  try {
    // await sql`DROP TABLE IF EXISTS videos`.then(()=> {
    //   console.log('Tabela apagada')
    // })
    await sql`
      CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title   TEXT,
        description     TEXT,
        duration     INTEGER
      );
    `;
    console.log('Tabela criada!');
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  } finally {
    sql.end();
  }
})();
