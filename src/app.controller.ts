import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/onwork')
  async onWork(@Body() body: string){
    return this.appService.onWork();
  }

  @Post('/offwork')
  async offWork(@Body() body: string){
    return this.appService.offWork();
  }

  @Get('/culc')
  async worktime(){
    return "helloworld";
  }
}
