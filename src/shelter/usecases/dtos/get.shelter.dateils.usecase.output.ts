export default class GetShelterDateilsUseCaseOutput {
  shelterName: string;
  shelterWhatsapp: string;
  shelterEmail: string;
  shelterPhone: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<GetShelterDateilsUseCaseOutput>) {
    Object.assign(this, data);
  }
}
