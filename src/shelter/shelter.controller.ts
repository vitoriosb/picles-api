import { Body, Controller, Get, Inject, Patch } from '@nestjs/common';
import { IUseCase } from './domain/iusecase.interface';
import UpdateShelterControllerInput from './dtos/update.shelter.controler.input';
import ShelterTokens from './shelter.tokens';
import GetShelterDatailsUseCaseOutput from './usecases/dtos/get.shelter.datails.usecase.output';

@Controller('shelter')
export class ShelterController {
  @Inject(ShelterTokens.getShelterDetailsUserCase)
  private readonly getShelterDetailsUseCase: IUseCase<
    null,
    GetShelterDatailsUseCaseOutput
  >;

  @Get()
  async getShelterDatails(): Promise<GetShelterDatailsUseCaseOutput> {
    return await this.getShelterDetailsUseCase.run(null);
  }

  @Patch()
  async updateShelterDetails(@Body() input: UpdateShelterControllerInput) {
    console.log(input);
  }
}
