import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

config(); // Load .env variables

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend calls
  app.enableCors();

  // Enable global validation pipes (optional but recommended)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
