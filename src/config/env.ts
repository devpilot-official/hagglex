import 'dotenv/config';

const env = {
  app_name: process.env.APP_NAME || 'Haggle X Backend Assessment',
  node_env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
  redis_url: String(process.env.REDIS_URL),
  redis_port: Number(process.env.REDIS_PORT),
  cache_ttl: Number(process.env.CACHE_TTL),
};

export default env;
