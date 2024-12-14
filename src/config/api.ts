import { getEnvironment } from '../utils/environment';

const API_URLS = {
  development: 'http://localhost:3000/api',
  production: import.meta.env.VITE_API_URL || 'https://api.jollyswipe.com/api',
};

export const getApiUrl = () => {
  const environment = getEnvironment();
  return API_URLS[environment];
};