import { Injectable } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import amqp from 'amqp-connection-manager';

@Injectable()
export class AppService {


   async getHello(){
    return "hello";
 }

  //  async  testRabbitMQConnection() {
  //   try {
  //     console.log("hell0------------------------------------->")
  //     const connection = await amqp.connect('amqp://localhost:5672');
  //     console.log('Successfully connected to RabbitMQ');
  //     console.log(connection);
  //     // await connection.close();
  //     return true;
  //   } catch (error) {
  //     console.error('Error connecting to RabbitMQ:', error.message);
  //   }
  
  //   }
  
}

