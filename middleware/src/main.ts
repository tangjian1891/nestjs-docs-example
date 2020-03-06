import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './user/logger2.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger)//全局中间件
  await app.listen(3000);
}
bootstrap();
