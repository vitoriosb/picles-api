import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schema';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.tokens';
import GetShelterDatailsUseCase from './usecases/get.shelter.datails.usecase';

@Module({
  controllers: [ShelterController],
  imports: [
    MongooseModule.forFeature([{ name: Shelter.name, schema: ShelterSchema }]),
  ],
  providers: [
    {
      provide: ShelterTokens.getShelterDetailsUserCase,
      useClass: GetShelterDatailsUseCase,
    },
  ],
})
export class ShelterModule {}
