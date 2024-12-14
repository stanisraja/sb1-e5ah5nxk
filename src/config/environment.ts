interface Environment {
  api: {
    url: string;
  };
  database: {
    host: string;
    user: string;
    password: string;
    name: string;
    port: number;
  };
  server: {
    port: number;
  };
  cors: {
    origin: string;
  };
}

export const getEnvironmentConfig = (): Environment => {
  return {
    api: {
      url: process.env.API_URL || 'http://localhost:3000',
    },
    database: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      name: process.env.DB_NAME || 'jollyswipe',
      port: parseInt(process.env.DB_PORT || '3306', 10),
    },
    server: {
      port: parseInt(process.env.PORT || '3000', 10),
    },
    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    },
  };
};