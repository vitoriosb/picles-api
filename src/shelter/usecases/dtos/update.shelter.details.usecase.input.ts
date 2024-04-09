export default class UpdateShelterDetailsUseCaseInput {
  name: string;
  email: string;
  phone: string;
  whatsApp: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<UpdateShelterDetailsUseCaseInput>) {
    Object.assign(this, data);
  }
}
