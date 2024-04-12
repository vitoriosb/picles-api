import { Inject, Injectable } from '@nestjs/common';
import AppTokens from 'src/app.tokens';
import PetNotFoundError from 'src/domain/errors/pet.not.found.error';
import { IUseCase } from 'src/shelter/domain/iusecase.interface';
import IFileService from '../interface/file.service.interface';
import IPetRepository from '../interface/pet.repository.interface';
import PetTokens from '../pet.tokens';
import { Pet } from '../schemas/pet.schema';
import UpdatePetByIdUseCaseInput from './dtos/update.pet.by.id.usecase.input';
import UpdatePetByIdUseCaseOutput from './dtos/update.pet.by.id.usecase.output';

@Injectable()
export default class UpdatePetByIdUseCase
  implements IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput>
{
  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository,

    @Inject(AppTokens.fileService)
    private readonly fileService: IFileService,
  ) {}
  async run(
    input: UpdatePetByIdUseCaseInput,
  ): Promise<UpdatePetByIdUseCaseOutput> {
    const pet = await this.getPetById(input.id);
    if (!pet) {
      throw new PetNotFoundError();
    }

    const petPhoto = !!pet.photo
      ? (await this.fileService.readFile(pet.photo)).toString('base64')
      : null;

    await this.petRepository.updateById({ ...input, _id: input.id });
    return new UpdatePetByIdUseCaseOutput({
      id: pet._id,
      name: pet.name,
      type: pet.type,
      size: pet.size,
      gender: pet.gender,
      bio: pet.bio,
      photo: petPhoto,
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
