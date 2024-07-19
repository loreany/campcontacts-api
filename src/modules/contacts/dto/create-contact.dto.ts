import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { GroupType } from '../entities/Group';
import { Status } from '../entities/Status';

export class CreateContactDto {
  @IsOptional()
  @IsEnum(GroupType)
  grupo: GroupType;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  endereco: string;

  @IsOptional()
  @IsString()
  bairro: string;

  @IsOptional()
  @IsString()
  latitude: string;

  @IsOptional()
  @IsString()
  longitude: string;

  @IsOptional()
  @IsString()
  fone: string;

  @IsOptional()
  @IsBoolean()
  whatsapp: boolean;

  @IsOptional()
  @IsString()
  // @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  redeSocial: string;

  @IsOptional()
  @IsString()
  obs: string;

  @IsOptional()
  @IsString()
  area: string;

  @IsOptional()
  @IsEnum(Status)
  status: Status;
}
