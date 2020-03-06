import { NestMiddleware, Injectable } from '@nestjs/common';
// 实现接口
// 中间件也需要注册,直接注册在根模块上,AppModule
export class LoggerMiddleware implements NestMiddleware {
  // 实现的这个use结果是不是很熟悉 app.use((req,res,next)=>{})
  use(req: any, res: any, next: Function) {
    console.log('触发中间件');
    // 这里就直接被断言了，不会再走路由了。在中间件我们已经强制返回了。
    // 中间件就可以用来验证一手token
    // res.send('express的原生返回');
    next();
  }
}

export class LoggerMiddleware2 implements NestMiddleware {
  // 实现的这个use结果是不是很熟悉 app.use((req,res,next)=>{})
  use(req: any, res: any, next: Function) {
    console.log('触发第二个中间件');
    // 这里就直接被断言了，不会再走路由了。在中间件我们已经强制返回了。
    // 中间件就可以用来验证一手token
    res.send('express的原生返回');
    // next();
  }
}
