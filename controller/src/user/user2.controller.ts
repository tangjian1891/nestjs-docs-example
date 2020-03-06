import {
  Controller,
  Get,
  HttpCode,
  Res,
  Header,
  Redirect,
} from '@nestjs/common';
import { Response } from 'express';
// 需要@Controller()装饰器。并且可以增加路由前缀@Controller('user')
@Controller('user2')
export class User2Controller {
  //3个路由:1.普通路由 2.自定义响应码路由 3.使用@Res()原生的响应对象。(前面2个使用nest封装的)
  /**
   *   关于这个路由的返回值。
   *    如果是js对象或数组。自动序列化为JSON.如果字符串或基本类型，直接返回
   */
  @Get('1')
  test1(): string {
    return '你好';
  }
  /**
   * 响应码默认200。 post请求为201。
   * 你可以使用@HttpCode(...)。手动指定。
   * 注意；指定的是默认路由的状态码,如果有异常，会走异常的处理(后面会有)
   */
  @Get('2')
  @HttpCode(209)
  test2(): string {
    return '响应了209的状态码';
  }
  @Get('3')
  @HttpCode(209)
  test3(@Res() res: Response) {
    // 注意:用了express的方式，就不能用nest的了。exporess的request对象请查看官方
    res.send('这是express的Respone的响应方式');
  }
  // 设置响应头 注意不要把请求头搞混了.请求头是@Headers() headers
  @Get('4')
  @Header('Hello', 'world')
  test4() {
    //浏览器访问 http://localhost:3000/user2/4
    return '你可以在我的响应头里找到 Hello word。-.-.';
  }

  // 重定向 从5 重定向到  4
  @Get('5')
  @Redirect('/user/2/4')
  test5() {
    // 直接重定向回 http://localhost:3000/user2/4
  }
  @Get('6')
  @Redirect('/user/2/4')
  test6() {
    // 动态重定向。在有@Redirect()装饰器的前提下，
    // return {url:string,statusCode:number}才可以
    return { url: 'http://www.baidu.com' };
  }
}
