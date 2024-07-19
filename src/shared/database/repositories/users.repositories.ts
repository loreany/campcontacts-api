import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findUnique(findUniqueDto: Prisma.UsersFindUniqueArgs) {
    return this.prismaService.users.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.UsersUpdateArgs) {
    return this.prismaService.users.update(updateDto);
  }
}
