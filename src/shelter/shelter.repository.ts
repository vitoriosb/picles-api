import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IShelterRepository from './interfaces/shelter.repository.interface';
import { Shelter } from './schemas/shelter.schema';

export class ShelterRepository implements IShelterRepository {
  constructor(
    @InjectModel(Shelter.name)
    private readonly shelterModel: Model<Shelter>,
  ) {}

  async get(): Promise<Shelter> {
    return await this.shelterModel.findOne();
  }
}
