import { Controller, Query, Get, Param, Post, Body } from '@nestjs/common';
import { UserPipe } from './user.pipe';
// 没有使用DTO的情况，查看三种参数的返回值
@Controller('user')
export class UserController {
  // 第一个。使用简单的query参数
  @Get()
  test1(@Query(new UserPipe()) query) {
    // - value { name: '13' }
    // - metadata { metatype: [Function: Object], type: 'query', data: undefined }
    return query;
  }

  @Get(':name/:id')
  test2(@Param(new UserPipe()) param) {
    // -value { name: 'tangjian', id: '1234' }
    //  -metadata { metatype: [Function: Object], type: 'param', data: undefined }
    return param;
  }
  @Post()
  test3(@Body(new UserPipe()) body) {
    // -value { name: '中国',age: '10000'}
    //  -metadata { metatype: [Function: Object], type: 'body', data: undefined }
    return body;
  }
}
