import { Body, Controller, Get, Inject, Put } from '@nestjs/common';
import { IUseCase } from './domain/iusecase.interface';
import ShelterTokens from './shelter.tokens';
import GetShelterDateilsUseCaseOutput from './usecases/dtos/get.shelter.dateils.usecase.output';
import UpdateShelterDetailsUseCaseInput from './usecases/dtos/update.shelter.details.usecase.input';
import UpdateShelterDetailsUseCaseOutput from './usecases/dtos/update.shelter.details.usecase.output';

@Controller('shelter')
export class ShelterController {
  @Inject(ShelterTokens.getShelterDetailsUserCase)
  private readonly getShelterDetailsUseCase: IUseCase<
    null,
    GetShelterDateilsUseCaseOutput
  >;

  @Inject(ShelterTokens.updateShelterDetailsUserCase)
  private readonly updateShelterDetailsUseCase: IUseCase<
    UpdateShelterDetailsUseCaseInput,
    UpdateShelterDetailsUseCaseOutput
  >;

  @Get()
  async getShelterDatails(): Promise<GetShelterDateilsUseCaseOutput> {
    return await this.getShelterDetailsUseCase.run(null);
  }

  @Put()
  async updateShelterDetails(
    @Body() input: UpdateShelterDetailsUseCaseInput,
  ): Promise<UpdateShelterDetailsUseCaseOutput> {
    const useCaseInput = new UpdateShelterDetailsUseCaseInput({ ...input });
    return await this.updateShelterDetailsUseCase.run(useCaseInput);
  }
}
