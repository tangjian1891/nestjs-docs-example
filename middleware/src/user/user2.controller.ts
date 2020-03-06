import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user2')
export class User2Controller {
  constructor(private readonly userService: UserService) {}

  @Get()
  search() {
    return this.userService.search();
  }
}
