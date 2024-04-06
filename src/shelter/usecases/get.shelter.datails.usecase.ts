import { Inject } from '@nestjs/common';
import { IUseCase } from '../domain/iusecase.interface';
import IShelterRepository from '../interfaces/shelter.repository.interface';
import ShelterTokens from '../shelter.tokens';
import GetShelterDetailsUseCaseOutput from './dtos/get.shelter.dateils.usecase.output';

export default class getShelterDetailsUseCase
  implements IUseCase<null, GetShelterDetailsUseCaseOutput>
{
  constructor(
    @Inject(ShelterTokens.shelterRepository)
    private readonly shelterRepository: IShelterRepository,
  ) {}

  async run(): Promise<GetShelterDetailsUseCaseOutput> {
    const shelter = await this.shelterRepository.get();
    console.log(shelter.name);

    return new GetShelterDetailsUseCaseOutput({
      shelterEmail: shelter.email,
      shelterName: shelter.name,
      shelterPhone: shelter.phone,
      shelterWhatsapp: shelter.whatsApp,
      createdAt: shelter.createdAt,
      updatedAt: shelter.updatedAt,
    });
  }
}
