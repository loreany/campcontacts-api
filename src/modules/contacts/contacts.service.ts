import { Injectable } from '@nestjs/common';
import { ContactsRepository } from 'src/shared/database/repositories/contacts.repositories';
import { CreateContactDto } from './dto/create-contact.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class ContactsService {
  constructor(
    private readonly contactsRepo: ContactsRepository,
    private readonly usersRepo: UsersRepository,
  ) {}

  async create(userId: number, createContactDto: CreateContactDto) {
    const { username } = await this.usersRepo.findUnique({
      where: { id: userId },
      select: { username: true },
    });

    return await this.contactsRepo.create({
      data: {
        grupo: createContactDto.grupo,
        nome: createContactDto.nome,
        endereco: createContactDto.endereco,
        bairro: createContactDto.bairro,
        latitude: createContactDto.latitude,
        longitude: createContactDto.longitude,
        fone: createContactDto.fone,
        whatsapp: createContactDto.whatsapp,
        email: createContactDto.email,
        redeSocial: createContactDto.redeSocial,
        obs: createContactDto.obs,
        status: createContactDto.status,
        area: createContactDto.area,
        usuario: username,
      },
    });
  }
}
