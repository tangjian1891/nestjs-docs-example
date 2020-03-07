import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User2Controller } from './user2.controller';
import { User3Controller } from './user3.controller';

@Module({
  providers: [UserService],
  controllers: [UserController, User2Controller, User3Controller],
})
export class UserModule {}
