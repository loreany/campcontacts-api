import { Body, Controller, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ActiveUserId } from 'src/shared/decorators/ActiveUsersId';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(
    @ActiveUserId() userId: number,
    @Body() createContactDto: CreateContactDto,
  ) {
    return this.contactsService.create(userId, createContactDto);
  }
}
