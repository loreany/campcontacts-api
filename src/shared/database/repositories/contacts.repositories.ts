import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ContactsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ContactsCreateArgs) {
    return this.prismaService.contacts.create(createDto);
  }
}
