import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { compare, hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  getUserById(userId: number) {
    return this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        nome: true,
        username: true,
      },
    });
  }

  async updatePassword(userId: number, updatePasswordDto: UpdatePasswordDto) {
    const { oldPassword, newPassword } = updatePasswordDto;

    const { password } = await this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        password: true,
      },
    });

    const isPasswordValid = await compare(oldPassword, password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Old Password Invalid');
    }

    const hashedPassword = await hash(newPassword, 12);

    await this.usersRepo.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });

    return null;
  }
}
