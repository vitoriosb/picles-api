import { Inject, Injectable } from '@nestjs/common';
import PetNotFoundError from 'src/domain/errors/pet.not.found.error';
import { IUseCase } from 'src/shelter/domain/iusecase.interface';
import IPetRepository from '../interface/pet.repository.interface';
import PetTokens from '../pet.tokens';
import { Pet } from '../schemas/pet.schema';
import GetPetByIdUseCaseInput from './dtos/get.pet.by.id.usecase.input';
import GetPetByIdUseCaseOutput from './dtos/get.pet.by.id.usecase.output';

@Injectable()
export default class GetPetByIdUseCase
  implements IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>
{
  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository,
  ) {}
  async run(input: GetPetByIdUseCaseInput): Promise<GetPetByIdUseCaseOutput> {
    const pet = await this.getPetById(input.id);

    if (pet === null) {
      throw new PetNotFoundError();
    }

    return new GetPetByIdUseCaseOutput({
      id: pet._id,
      name: pet.name,
      type: pet.type,
      size: pet.size,
      gender: pet.gender,
      bio: pet.bio,
      createdAt: pet.createdAt,
      updatedAt: pet.updatedAt,
    });
  }

  private async getPetById(id: string): Promise<Pet> {
    try {
      return await this.petRepository.getById(id);
    } catch (error) {
      return null;
    }
  }
}
