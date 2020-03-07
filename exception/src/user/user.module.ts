import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User2Controller } from './user2.controller';
import { User3Controller } from './user3.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [UserController, User2Controller, User3Controller],
  providers: [UserService],
})
export class UserModule {}
