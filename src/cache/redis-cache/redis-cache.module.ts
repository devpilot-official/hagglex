import { Module, CacheModule as BaseCacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';
import { RedisCacheService } from './redis-cache.service';
import env from '../../config/env';

@Module({
  imports: [
    BaseCacheModule.registerAsync({
      useFactory: async () => ({
        store: redisStore,
        host: env.redis_url,
        port: env.redis_port,
        // ttl: env.cache_ttl,
      }),
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
