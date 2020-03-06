import { Module } from '@nestjs/common';
import { User2Controller } from './user2.controller';
import { User3Controller } from './user3.controller';
import { User4Controller } from './user4.controller';
// 有且只引入一个控制器
@Module({
  controllers: [User2Controller, User3Controller, User4Controller],
})
export class UserModule {}
