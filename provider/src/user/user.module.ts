import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// 所有需要DI注入的对象。都在注册在模块的Provider中。
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
