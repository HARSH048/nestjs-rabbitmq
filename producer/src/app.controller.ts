import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('MATH_SERVICE') private readonly client: ClientProxy,
      
    private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
 }
}
