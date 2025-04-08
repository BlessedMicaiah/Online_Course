import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@shared/schema';

// Initialize the postgres client
const client = postgres(process.env.DATABASE_URL!);

// Create drizzle instance with our schema
export const db = drizzle(client, { schema });