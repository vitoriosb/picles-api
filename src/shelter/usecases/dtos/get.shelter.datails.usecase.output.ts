export default class GetShelterDatailsUseCaseOutput {
  shelterName: string;
  shelterWhatsapp: string;
  shelterEmail: string;
  shelterPhone: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<GetShelterDatailsUseCaseOutput>) {
    Object.assign(this, data);
  }
}
