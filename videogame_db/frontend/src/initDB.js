// src/initializeDb.js
import { syncDb } from "./lib/db/db.js";
async function initialize() {
  console.log('Initializing the database...');
  await syncDb();
  console.log('Database initialization complete.');
}

initialize().catch((error) => {
  console.error('Failed to initialize the database:', error);
  process.exit(1); // Exit with a failure code
});
