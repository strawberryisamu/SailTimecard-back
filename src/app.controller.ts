import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from 'dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/onwork')
  async onWork(@Body() body:CreateUserDto){
    const {name, date, onwork} = body;
    const work = await this.appService.onWork({
    });
    return "helloworld";
  }

  @Post('/offwork')
  async offWork(@Body() name: CreateUserDto){
    return this.appService.offWork(name);
  }

  @Get('/culc')
  async worktime(){
    return "helloworld";
  }
}
