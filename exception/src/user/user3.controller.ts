import { Controller, Get, HttpException, UseFilters } from '@nestjs/common';
import {
  HttpExceptionFilter,
  MyExceptionFilter,
} from 'src/core/exception.filter';

// 测试自定义的异常过滤器. 拦截异常。自己响应
@Controller('user3')
export class User3Controller {
  @Get('1')
  @UseFilters(MyExceptionFilter)
  test1() {
    throw new HttpException('抛出一个异常', 400);
  }

  @Get('2')
  @UseFilters(MyExceptionFilter)
  test2() {
    throw new Error('这是一个不知道什么的异常');
  }
}
