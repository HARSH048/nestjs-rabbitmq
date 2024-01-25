import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    await app.listen(4000, () => {
      console.log('server running on port 4000');
    });
  } catch (error) {
    console.error('Error during application startup:', error);
  }
}

bootstrap();
