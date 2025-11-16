import { Controller, Post, Body, Get } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('requests')
export class DatabaseController {
  constructor(private readonly requestService: RequestService) {}

@Post()
  create(
    @Body() body: { location: string; bloodType: string; quantity: number }
  ) {
    // Map frontend fields to DB columns in service
    return this.requestService.createRequest(body);
  }

   @Get()
  async getRequests() {
    return this.requestService.getAllRequests();
  }
}
