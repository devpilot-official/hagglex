import 'dotenv/config';

const env = {
  app_name: process.env.APP_NAME || 'Skarpa Admin Backend Service',
  node_env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
};

export default env;
