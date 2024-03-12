export const ENV = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  appMode: process.env.NEXT_PUBLIC_APP_MODE,
  webHostUrl: process.env.NEXT_PUBLIC_WEB_HOST_URL,
  storageUrl: process.env.NEXT_PUBLIC_STORAGE_URL,
  isDevelopment: process.env.NEXT_PUBLIC_APP_MODE === 'development',
  isStaging: process.env.NEXT_PUBLIC_APP_MODE === 'staging',
  isProduction: process.env.NEXT_PUBLIC_APP_MODE === 'production',
};
