import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.tokens';
import GetShelterDatailsUseCase from './usecases/get.shelter.datails.usecase';

@Module({
  controllers: [ShelterController],
  providers: [
    {
      provide: ShelterTokens.getShelterDetailsUserCase,
      useClass: GetShelterDatailsUseCase,
    },
  ],
})
export class ShelterModule {}
