import {
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from 'src/app.service';

// 这里是异常过滤器。完全掌控异常的处理。定制需求
// 需要一个装饰器。有且只 捕获的是HttpException的实例 。也
// 就是说不捕获Error. 不加就是不挑食，啥都捕获 .但是可能无法准确调用对应函数
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // 需要获取原生的，也就express的Request和Response 对象
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // 获取的是exception定义的那个。 HttpException 内置的方法有，可以去看它的源码
    //  getResponse(): string | object;
    // getStatus(): number;
    const status = exception.getStatus(); // 获取到的是HttpException的status
    const msg = exception.getResponse();
    // throw new HttpException('我不想处理了，还是交给内置吧', 444);//不允许在这里继续抛出

    // 标准展示
    response.status(status).json({
      statusCode: status,
      timestamp: +new Date(),
      path: request.url,
      msg,
    });
  }
}
// 如果我不加装饰器===@Catch(Error)。这个异常就可以捕获目标路由上的所有异常
@Catch(Error)
export class MyExceptionFilter implements ExceptionFilter {
  // exception的类型是配置Catch捕获准确定位异常类型。便于调用方法
  async catch(exception: Error, host: ArgumentsHost) {
    // exception.message 这是error自带的属性.可以拿
    // 完全自己操作。
    // Error属性就是原生报错的属性。
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // 突然想DI一个service层，将数据写入数据库
    // console.log('记录下这个神奇的时刻,写入日志...写入完成');
    // js 总能绕过你 。调用写入日志
    const res = await AppService.prototype.writeLogger();
    response.send(res);
  }
}
