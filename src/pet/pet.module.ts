import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetController } from './pet.controller';
import PetRepository from './pet.repository';
import PetTokens from './pet.tokens';
import { Pet, PetSchema } from './schemas/pet.schema';
import CreatePetUseCase from './usecases/create.pet.usecase';
import GetPetByIdUseCase from './usecases/get.by.id.usecase';

@Module({
  controllers: [PetController],
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
  providers: [
    {
      provide: PetTokens.createPetUseCase,
      useClass: CreatePetUseCase,
    },
    {
      provide: PetTokens.petRepository,
      useClass: PetRepository,
    },
    {
      provide: PetTokens.getPetByIdUseCase,
      useClass: GetPetByIdUseCase,
    },
  ],
})
export class PetModule {}
