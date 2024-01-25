import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672/'],
      queue: 'TEST_QUEUE',
        noAck:false,
      queueOptions: {
        durable: false,
      },
    },
  });
  await microservice.listen();
  await app.listen(3000, () => {
    console.log('server running on port 3000');
  });
}
bootstrap();
