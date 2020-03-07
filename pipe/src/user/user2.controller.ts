import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { User2Pipe } from './user.pipe';
// 使用了DTO
export class UserDto {
  username: string;
  password: string;
  email: string;
}

@Controller('user2')
export class User2Controller {
  @Post('1')
  test1(@Body(new User2Pipe()) userDto: UserDto) {
    // - value { name: '中国',age: '10000', }
    // - metadata { metatype: [Function: UserDto], type: 'body', data: undefined }
    // 发现这个metatype 变成了DTO，之前是 Object
    return userDto;
  }
  // 获取一个元数据中 对象的属性 .那么就不能用属性的方式.必须采用装饰器
  @Post('2')
  @UsePipes(User2Pipe)
  test2(@Body('name') name: string) {
    // - value  中国
    // - metadata { metatype: [Function: String], type: 'body', data: 'name' }
    // 发现这个metatype 变成了DTO，之前是 Object
    // type 没有变化.从哪种类型上取的参数
    // data 变成了指定的属性
    return name;
  }
}
