import dotenv from 'dotenv';
import { Environment } from '../types';

// Load environment variables
dotenv.config();

const getDbConfig = (env: Environment) => ({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'jollyswipe',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const dbConfig = getDbConfig(process.env.NODE_ENV as Environment);