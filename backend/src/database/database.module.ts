import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseController } from './database.controller';
import { RequestService } from './request.service';
import { Request } from 'src/requests/request.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Request])],
  controllers: [DatabaseController],
  providers: [RequestService],
})
export class DatabaseModule {}
