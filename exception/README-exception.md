# 异常处理，一定要的。毕竟你不希望你的程序在运行中被迫停止

在 koa 中因为洋葱模型的存在，做异常的兜底操作也很方便。
在 nestjs 中内置异常层(全局异常过滤器)
内置:分两种、

- 如果是内置的 HttpException 及其子类(包含你自定义的也可以)异常。会有一套对应的处理机制(你也可以自己封)。
- 其余异常，nestjs 默认处理为 500 Internal server error

- 起步:创建 User 模块
  内置异常模块。直接抛出也可以 https://docs.nestjs.com/exception-filters
  内置的 HTTP 例
  下面打印一下常用的内置异常的默认信息。 内置异常默认只有 error ,statusCode
  其中 statusCode 不允许更爱。 可以修改 error 以及新增一个 message 属性
  ，一般 message 可以满足我们的附加信息
- BadRequestException {"statusCode":400,"error":"Bad Request"} 错误请求。参数不符
- UnauthorizedException {"statusCode":401,"error":"Unauthorized"} 权限不足，请先登录
- NotFoundException {"statusCode":404,"error":"Not Found"} //注意这个,不要让（前端同学）与路由没命中弄混淆了 没有找到资源
- ForbiddenException {"statusCode":403,"error":"Forbidden"} 403 禁止访问.nignx 配置访问白名单会出现这个错误,禁止外部访问内部资源
- NotAcceptableException {"statusCode":406,"error":"Not Acceptable"} 这个没接触过了
- ServiceUnavailableException {"statusCode":503,"error":"Service Unavailable"} 服务过载,服务器压力过大，稍后再试。(也可以故意抛出，禁止一些恶意访问)

# 异常过滤器.

有时候你想掌控完整的异常处理，不想 nestjs 帮你响应。你可以需要在响应前写一些日志。

过滤器级别
方法范围，控制器范围或全局范围。
方法与控制器都是使用 @UseFilters(targetException)

全局: main.ts 中
app.useGlobalFilters(new HttpExceptionFilter());

或:app.module.ts 中

```
providers: [
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
],

```
