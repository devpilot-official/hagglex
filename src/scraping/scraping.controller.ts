/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { response } from '../utils/response';
import { ScrapingService } from './scraping.service';

@Controller('scraping')
export class ScrapingController {
    constructor(private readonly scrapingService: ScrapingService) {}

    @Get('/')
    public async scrapeURL(@Req() req, @Res() res, @Query() query) {
        const data = await this.scrapingService.scrapeURL(req, query);
        return response(res, data);
    }

}
