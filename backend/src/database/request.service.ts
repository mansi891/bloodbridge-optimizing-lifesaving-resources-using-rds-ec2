import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'src/requests/request.entity';

import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private requestRepo: Repository<Request>,
  ) {}

  async createRequest(data: {
    location: string;   // frontend "location"
    bloodType: string;  // frontend "bloodType"
    quantity: number;   // frontend "quantity"
  }) {
    const request = this.requestRepo.create({
      hospital_name: data.location, // map frontend -> DB
      blood_group: data.bloodType,  // map frontend -> DB
      units_needed: data.quantity,  // map frontend -> DB
    });
    return this.requestRepo.save(request);
  }

  async getAllRequests() {
    return this.requestRepo.find();
  }
}
