import { Shelter } from '../schemas/shelter.schema';

export default interface IShelterRepository {
  update(input: Partial<Shelter>): Promise<void>;
  get(): Promise<Shelter>;
}
