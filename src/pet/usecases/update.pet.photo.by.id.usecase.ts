import { Inject, Injectable } from '@nestjs/common';
import AppTokens from 'src/app.tokens';
import PetNotFoundError from 'src/domain/errors/pet.not.found.error';
import { IUseCase } from 'src/shelter/domain/iusecase.interface';
import IFileService from '../interface/file.service.interface';
import IPetRepository from '../interface/pet.repository.interface';
import PetTokens from '../pet.tokens';
import { Pet } from '../schemas/pet.schema';
import UpdatePetPhotoByIdUseCaseInput from './dtos/update.pet.photo.by.id.usecase.input';
import UpdatePetPhotoByIdUseCaseOutput from './dtos/update.pet.photo.by.id.usecase.output';

@Injectable()
export default class updatePetByIdUseCase
  implements
    IUseCase<UpdatePetPhotoByIdUseCaseInput, UpdatePetPhotoByIdUseCaseOutput>
{
  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository,

    @Inject(AppTokens.fileService)
    private readonly fileService: IFileService,
  ) {}

  async run(
    input: UpdatePetPhotoByIdUseCaseInput,
  ): Promise<UpdatePetPhotoByIdUseCaseOutput> {
    const pet = await this.findPetById(input.id);
    if (!pet) {
      throw new PetNotFoundError();
    }
    await this.petRepository.updateById({
      _id: input.id,
      photo: input.photoPath,
    });

    const photo = await this.fileService.readFile(input.photoPath);

    return new UpdatePetPhotoByIdUseCaseOutput({
      id: pet._id,
      bio: pet.bio,
      createdAt: pet.createdAt,
      gender: pet.gender,
      name: pet.name,
      photo: photo.toString('base64'),
      size: pet.size,
      type: pet.type,
      updatedAt: pet.updatedAt,
    });
  }

  private async findPetById(id: string): Promise<Pet> {
    try {
      return await this.petRepository.getById(id);
    } catch (error) {
      return null;
    }
  }
}
