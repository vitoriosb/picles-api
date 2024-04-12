import { Inject, Injectable } from '@nestjs/common';
import AppTokens from 'src/app.tokens';
import { IUseCase } from 'src/shelter/domain/iusecase.interface';
import PetResponse from '../dtos/pet.response';
import IFileService from '../interface/file.service.interface';
import IPetRepository from '../interface/pet.repository.interface';
import PetTokens from '../pet.tokens';
import GetPetsUseCaseInput from './dtos/get.pets.usecase.input';
import GetPetsUseCaseOutput from './dtos/get.pets.usecase.output';

@Injectable()
export default class GetPetsUseCase
  implements IUseCase<GetPetsUseCaseInput, GetPetsUseCaseOutput>
{
  // itemsPerPage: number;
  // gender: Condition<string>;
  // page: number;
  // type: any;
  // size: any;
  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository,

    @Inject(AppTokens.fileService)
    private readonly fileService: IFileService,
  ) {}
  async run(input: GetPetsUseCaseInput): Promise<GetPetsUseCaseOutput> {
    const queryResponse = await this.petRepository.findByFilter(input);
    const petResponseList: PetResponse[] = [];

    for (const currentPet of queryResponse.items) {
      if (currentPet.photo) {
        const photoInBase64 = await this.fileService.readFile(currentPet.photo);
        currentPet.photo = photoInBase64.toString('base64');
      }

      const totalPages = Math.ceil(queryResponse.total / input.itemsPerPage);

      return new GetPetsUseCaseOutput({
        currentPage: input.page,
        totalPages,
        items: petResponseList,
      });
    }
  }
}
