import { Controller, Get, Post } from '@nestjs/common';
// 介绍资源操作符。咱要往restful风格靠拢
// 类上的控制器已经函数路由上的请求方式都可以增加路由参数
// @Controller('user')  @Get('id') /user/id
@Controller('user')
export class UserController {
  @Get()
  test1() {
    //浏览器访问 http://localhost:3000/user2 会被命中
    return '这是get请求';
  }

  @Post()
  test2() {
    //使用Postman http://localhost:3000/user2 POST请求 会被命中
    return '这是post请求啊';
  }
  // 同理还有很多。每个装饰器都代表对应的http method。符合才会命中
  // @Put()，@Delete()，@Patch()，@Options()，@Head()和@All()。每个代表各自的HTTP请求方法。
  //支持通配符@Get('ab*cd')。但是一般使用@Param()接收方便点。在user3.controller.ts中有
}
