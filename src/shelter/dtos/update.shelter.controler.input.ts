import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
} from 'class-validator';

export default class UpdateShelterControllerInput {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @Length(11, 11)
  @IsNotEmpty()
  whatsapp: string;
  @Length(11, 11)
  @IsNumberString()
  @IsNotEmpty()
  phone: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
