import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import AppTokens from 'src/app.tokens';
import FileService from 'src/file.service';
import { PetController } from './pet.controller';
import PetRepository from './pet.repository';
import PetTokens from './pet.tokens';
import { Pet, PetSchema } from './schemas/pet.schema';
import CreatePetUseCase from './usecases/create.pet.usecase';
import DeletePetByIdUseCase from './usecases/delete.pet.by.id.usecase';
import GetPetByIdUseCase from './usecases/get.by.id.usecase';
import GetPetsUseCase from './usecases/get.pets.usecase';
import UpdatePetByIdUseCase from './usecases/update.pet.by.id.usecase';

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
    {
      provide: PetTokens.updatePetByIdUseCase,
      useClass: UpdatePetByIdUseCase,
    },
    {
      provide: PetTokens.deletePetByIdUseCase,
      useClass: DeletePetByIdUseCase,
    },
    {
      provide: PetTokens.updatePetByIdUseCase,
      useClass: UpdatePetByIdUseCase,
    },
    {
      provide: PetTokens.getPetsUseCase,
      useClass: GetPetsUseCase,
    },
    {
      provide: AppTokens.fileService,
      useClass: FileService,
    },
  ],
})
export class PetModule {}
