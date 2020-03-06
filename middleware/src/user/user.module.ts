import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { logger } from './logger2.middleware';
import { User2Controller } from './user2.controller';

@Module({
  controllers: [UserController, User2Controller],
  providers: [UserService],
})
//尝试在子模块注册实现
export class UserModule {
  // export class UserModule implements NestModule {
  // 确实是可以在当前子模块直接注册。无差别。可能不好找。因为在AppModule中注册更利于查找
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(logger).forRoutes(UserController);
  // }
}
