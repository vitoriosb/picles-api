import { Inject, Injectable } from '@nestjs/common';
import { IUseCase } from 'src/shelter/domain/iusecase.interface';
import IPetRepository from '../interface/pet.repository.interface';
import PetTokens from '../pet.tokens';
import CreatePetUseCaseInput from './dtos/create.pet.usecase.input';
import CreatePetUseCaseOutput from './dtos/create.pet.usecase.output';

@Injectable()
export default class CreatePetUseCase
  implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>
{
  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository,
  ) {}

  async run(Input: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
    const newPet = await this.petRepository.create(Input);
    return new CreatePetUseCaseOutput({
      id: newPet._id,
      name: newPet.name,
      type: newPet.type,
      size: newPet.size,
      gender: newPet.gender,
      bio: newPet.bio,
      photo: newPet.photo,
      createdAt: newPet.createdAt,
      updatedAt: newPet.updatedAt,
    });
  }
}
