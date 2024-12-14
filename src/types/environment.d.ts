export type Environment = 'development' | 'production';

export interface DatabaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  waitForConnections: boolean;
  connectionLimit: number;
  queueLimit: number;
}

export interface ApiConfig {
  url: string;
  port: number;
}