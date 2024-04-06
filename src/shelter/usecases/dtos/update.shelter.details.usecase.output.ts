import UpdateShelterDetailsUseCaseInput from './update.shelter.details.usecase.input';

export default class UpdateShelterDetailsUseCaseOutput {
  name: string;
  whatsApp: string;
  email: string;
  phone: string;

  constructor(data: Partial<UpdateShelterDetailsUseCaseInput>) {
    Object.assign(this, data);
  }
}
