/* eslint-disable prettier/prettier */
import { Injectable, HttpService, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import * as path from 'path';
import * as cheerio from 'cheerio';
import * as http from 'https';
import { imageSize } from 'image-size';

@Injectable()
export class ScrapingService {
    constructor(private httpService: HttpService) {}

    async scrapeURL(req: Request, query: any) {
        const { url } = query;
        const { data, status } = await this.httpService.get(`${url}`).toPromise();
        const resObj = { 
            title: '',
            description: '',
            images: []
        };

        if (status !== HttpStatus.OK) {
            return {
                code: status,
                message: 'there was a problem getting the request details!',
                data: {}
            };    
        }
        
        const $ = cheerio.load(data),
        $title = $('head title').text(),
        $desc = $('meta[name="description"]').attr('content'),
        $images = $('img');

        if ($title) {
            resObj.title = $title;
        }

        if ($desc) {
            resObj.description = $desc;
        }

        if ($images && $images.length){
            resObj.images = [];

            for (let i = 0; i < $images.length; i++) {
                const etx = path.extname($($images[i]).attr('src'));
                if (etx === '.png' || etx === '.jpg' || etx === '.jpeg' || etx === '.svg' || etx === '.bmp') {
                    resObj.images.push($($images[i]).attr('src'));
                }
            }

            // for (let j = 0; j < resObj.images.length; j++) {
            //     const imgUrl = resObj.images[j]

            //     http.get(imgUrl, function (response) {
            //         const chunks = []
            //         response.on('data', function (chunk) {
            //             chunks.push(chunk)
            //             console.log(chunk.length)
            //         }).on('end', function() {
            //             console.log(chunks)
            //             const buffer = Buffer.concat(chunks)
            //             const d = imageSize(buffer).height;
            //             resObj.sizes.push(d);
            //         });
            //     })
            // }
        }

        //send the response
        return {
            code: HttpStatus.OK,
            message: `Scraped data from ${url}`,
            data: resObj
        };
    }
}
