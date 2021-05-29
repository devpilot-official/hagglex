import { Module, HttpModule } from '@nestjs/common';
import { ScrapingService } from './scraping.service';
import { ScrapingController } from './scraping.controller';

@Module({
  imports: [HttpModule],
  providers: [ScrapingService],
  controllers: [ScrapingController],
})
export class ScrapingModule {}
