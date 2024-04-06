import { Injectable } from '@nestjs/common';
import { IUseCase } from '../domain/iusecase.interface';
import UpdateShelterDetailsUseCaseInput from './dtos/update.shelter.details.usecase.input';
import UpdateShelterDetailsUseCaseOutput from './dtos/update.shelter.details.usecase.output';

@Injectable()
export default class UpdateShelterDetailsUseCase
  implements
    IUseCase<
      UpdateShelterDetailsUseCaseInput,
      UpdateShelterDetailsUseCaseOutput
    >
{
  run(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    input: UpdateShelterDetailsUseCaseInput,
  ): Promise<UpdateShelterDetailsUseCaseOutput> {
    throw new Error('Method now implemented');
  }
}
