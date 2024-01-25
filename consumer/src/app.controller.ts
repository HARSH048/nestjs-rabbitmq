import { Controller, Get, Injectable, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, ClientProxyFactory, Ctx, EventPattern, MessagePattern, Payload, RmqContext, Transport } from '@nestjs/microservices';




@Controller()
export class AppController{
   constructor(private readonly appService: AppService) {}

  @EventPattern('EVENT_NAME')
   async handleMessagePrinted(@Payload() data: any, @Ctx() context: RmqContext) {
    try {
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      console.log('Received message:', data);
      channel.ack(originalMsg);
    } catch (error) {
      console.error('Error handling message:', error);
    }
}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
}

