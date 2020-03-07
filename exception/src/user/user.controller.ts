import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('user')
export class UserController {
  // 1直接触发
  @Get('1')
  clickError() {
    throw '手动拉起异常';
    return '你是看不到这句话的';
  }
  // 2捕获异常，自己处理掉
  @Get('2')
  clickError2() {
    try {
      // 因为ts的存在，很多js的异常不好复现。像变量未定义这些
      // 还是直接抛出吧
      throw new Error('一个error异常');
    } catch (error) {
      // 直接捕获。
      //...对应逻辑,写入日志什么都可以
      return '已经处理完异常了';
    }
  }
  // 3 抛出了内置的HttpException。响应的数据是友好的提示

  @Get('3')
  clickErrpr() {
    // 第一个参数是响应的message,第二个参数是status .可以使用内置枚举
    // HttpStatus这里使用了。这是从@nestjs/common包中导入的帮助程序枚举
    // throw new HttpException('http请求异常', HttpStatus.OK);

    throw new HttpException(
      {
        error_code: 10001, //这里是自定义的异常也可以
        message: 'This is a custom message',
        data: [],
      },
      403,
    );
  }
}
