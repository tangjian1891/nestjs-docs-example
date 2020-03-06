import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './user/logger.middleware';
import { UserController } from './user/user.controller';
import { User2Controller } from './user/user2.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
// 注册中间件 。需要实现一个NestModule接口
export class AppModule implements NestModule {
  // 这个是可以使用异步
  async configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('user');//直接在所有user路由上加中间件
    /**
     * 限定路由的限定http请求动作
     *  consumer
     *  .apply(LoggerMiddleware)
     *  .forRoutes({ path: 'user', method: RequestMethod.GET });
     */
    /**
     * apply可以放入多个中间件。依次执行
     * consumer
     *  .apply(LoggerMiddleware, LoggerMiddleware2)
     * .forRoutes(UserController); //直接注入控制器
     */
    // 排除一些中间件
    /**
     *
     * consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      )
      .forRoutes(UserController);
     *
     */
    //--------------------使用函数中间件--------------
    //  中间件不需要任何依赖项时，使用函数中间件更简单
    // consumer.apply(logger).forRoutes(UserController);
    //--------------整个项目级别的中间件,在main.ts中-------------
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({
    //     path: '*',
    //     method: RequestMethod.ALL,
    //   })
    // 同理forRouters中可以放多个控制器
    // consumer.apply(LoggerMiddleware).forRoutes(UserController, User2Controller);
    // 也可以多次注册
    // consumer.apply(LoggerMiddleware).forRoutes(UserController);
    // consumer.apply(LoggerMiddleware).forRoutes(User2Controller);
  }
}
