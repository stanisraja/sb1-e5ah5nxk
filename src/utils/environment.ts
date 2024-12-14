export type Environment = 'development' | 'production';

export const getEnvironment = (): Environment => {
  return import.meta.env.PROD ? 'production' : 'development';
};

export const isDevelopment = () => getEnvironment() === 'development';
export const isProduction = () => getEnvironment() === 'production';