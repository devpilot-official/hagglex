/* eslint-disable prettier/prettier */
import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import env from '../../config/env';

@Injectable()
export class RedisCacheService {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cache: Cache,
    ) {
        // tslint:disable-next-line: no-console
        console.log('Redis server started');
    }

    async get(key): Promise<string> {
        return await this.cache.get(key);
    }

    async getMany(keys: string[]): Promise<string[]> {
        return await this.cache.mget(keys);
    }

    async set(key, value, expiry = { ttl: env.cache_ttl }) {
        await this.cache.set(key, value, expiry);
    }

    async del(key: string) {
        await this.cache.del(key);
    }
}
