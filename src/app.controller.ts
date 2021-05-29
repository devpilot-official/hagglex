/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import env from './config/env';

@Controller()
export class AppController {
  @Get()
  homepage(@Req() req, @Res() res) {
    res.json({
      code: HttpStatus.OK,
      message: `Welcome to ${env.app_name}`,
      data: {}
    });
  }
}
