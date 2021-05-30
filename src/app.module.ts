import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScrapingModule } from './scraping/scraping.module';
import { RedisCacheModule } from './cache/redis-cache/redis-cache.module';
import { CatchingModule } from './catching/catching.module';

@Module({
  imports: [ScrapingModule, RedisCacheModule, CatchingModule],
  controllers: [AppController],
})
export class AppModule {}
