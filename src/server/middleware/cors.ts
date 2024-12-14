import cors from 'cors';
import { getEnvironment } from '../../utils/environment';

const ALLOWED_ORIGINS = {
  development: ['http://localhost:5173'],
  production: [
    'https://jollyswipe.com',
    'https://www.jollyswipe.com',
    // Add other production domains if needed
  ],
};

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    const environment = getEnvironment();
    const allowedOrigins = ALLOWED_ORIGINS[environment];

    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.indexOf(origin) !== -1 || environment === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
});