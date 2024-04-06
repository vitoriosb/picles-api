import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schema';
import { ShelterController } from './shelter.controller';
import { ShelterRepository } from './shelter.repository';
import ShelterTokens from './shelter.tokens';
import GetShelterDatailsUseCase from './usecases/get.shelter.datails.usecase';
import UpdateShelterDetailsUseCase from './usecases/update.shelter.details.usecase';
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
    {
      provide: ShelterTokens.shelterRepository,
      useClass: ShelterRepository,
    },
    {
      provide: ShelterTokens.updateShelterDetailsUserCase,
      useClass: UpdateShelterDetailsUseCase,
    },
  ],
})
export class ShelterModule {}
