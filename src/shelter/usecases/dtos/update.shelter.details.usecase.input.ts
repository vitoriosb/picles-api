export default class UpdateShelterDetailsUseCaseInput {
  name: string;
  email: string;
  phone: string;
  whatsApp: string;
  constructor(data: Partial<UpdateShelterDetailsUseCaseInput>) {
    Object.assign(this, data);
  }
}
