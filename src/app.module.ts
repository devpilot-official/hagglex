import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScrapingModule } from './scraping/scraping.module';

@Module({
  imports: [ScrapingModule],
  controllers: [AppController],
})
export class AppModule {}
