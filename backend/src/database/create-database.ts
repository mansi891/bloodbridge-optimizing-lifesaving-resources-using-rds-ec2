import { Client } from 'pg';
import { config } from 'dotenv';
config();

export async function createDatabase() {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  });

  await client.connect();

  // Create table if it does not exist
  await client.query(`
    CREATE TABLE IF NOT EXISTS requests (
      id SERIAL PRIMARY KEY,
      hospitalname VARCHAR(100),
      bloodgroup VARCHAR(10),
      unitsneeded INT,
      createdat TIMESTAMP DEFAULT NOW()
    );
  `);

  await client.end();
  console.log('Database and table ready!');
}
