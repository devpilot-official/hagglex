import { Module, HttpModule } from '@nestjs/common';
import { CatchingService } from './catching.service';
import { CatchingController } from './catching.controller';
import { RedisCacheModule } from '../cache/redis-cache/redis-cache.module';

@Module({
  imports: [RedisCacheModule, HttpModule],
  providers: [CatchingService],
  controllers: [CatchingController],
})
export class CatchingModule {}
