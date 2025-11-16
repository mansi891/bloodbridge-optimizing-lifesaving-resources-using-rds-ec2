import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';

import * as dotenv from 'dotenv';
import { Request } from './requests/request.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
     // port: parseInt(process.env.DB_PORT, 10),
 
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Request],
      synchronize: true, // Keep true for dev, false for production
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
