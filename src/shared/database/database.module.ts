import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { ContactsRepository } from './repositories/contacts.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, ContactsRepository],
  exports: [UsersRepository, ContactsRepository],
})
export class DatabaseModule {}
