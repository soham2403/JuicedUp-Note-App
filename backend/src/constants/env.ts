const getEnvVar = (key: string, defaultValue: string): string => {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`${key} is not defined in environment variables`);
  }
  return value;
};

export const NODE_ENV = getEnvVar("NODE_ENV", "development");
export const PORT = getEnvVar("PORT", "4004");
export const CORS_ORIGIN = getEnvVar("CORS_ORIGIN", "http://localhost:5173");
export const MONGO_URI = getEnvVar(
  "MONGO_URI",
  "mongodb://localhost:27017/notedb"
);
export const JWT_SECRET = getEnvVar("JWT_SECRET", "your_jwt_secret_key");
export const JWT_REFRESH_SECRET = getEnvVar(
  "JWT_REFRESH_SECRET",
  "your_jwt_refresh_secret_key"
);

export const EMAIL_SENDER = getEnvVar(
  "EMAIL_SENDER",
  "your_email_sender@example.com"
);
export const RESEND_API_KEY = getEnvVar(
  "RESEND_API_KEY",
  "your_resend_api_key"
);
