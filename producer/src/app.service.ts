import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import amqp from 'amqp-connection-manager';

@Injectable()
export class AppService {

  constructor( @Inject('MATH_SERVICE') private readonly client: ClientProxy){}

  
  async getHello(){
    const message = { yourData: 'Hello, RabbitMQ!' };
    await this.client.emit('EVENT_NAME', message);
    return true;
 }
}

// testRabbitMQConnection();