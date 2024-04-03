import { IUseCase } from '../domain/iusecase.interface';
import GetShelterDatailsUseCaseOutput from './dtos/get.shelter.datails.usecase.output';

export default class GetShelterDatailsUseCase
  implements IUseCase<void, GetShelterDatailsUseCaseOutput>
{
  run(): Promise<GetShelterDatailsUseCaseOutput> {
    return Promise.resolve(
      new GetShelterDatailsUseCaseOutput({
        shelterEmail: 'aaa@gmail.com',
        shelterName: 'aaaaa',
        shelterPhone: '15996951903',
        shelterWhatsapp: '15996951903',
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    );
  }
}
