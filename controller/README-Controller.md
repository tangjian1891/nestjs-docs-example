> 介绍起步:完整的介绍 Controller

nestjs 是按照 MVC 三层模块划分的，但是代码的分布又与 JAVA 的三层有点区别。
Java:Controller Service Dao Entity
nestjs:按业务摆放的。我一个 User 模块下面。就有 Controller,service,entity。
因为他的模块最终都需要注册到 app.module.ts 上。启动时由 main.ts 加载。

## 1.创建一个自己模块功能 User 在下面写测试代码

在 src 下创建一个 user 文件夹
分别创建 user.module.ts user.controller.ts
基本代码从对应的 app.\*\*\*.ts 拷贝。你也可以使用 nest -h 查看快捷生成
走通一个流程的代码为:User 控制器注册到 User 模块，User 模块注册到 App 主模块,在 main.ts 中加载主模块
访问 localhost:3000/user

有四个代码 controller。

- controller 展示路由以及资源操作符

- controller2 展示原生 respone 和 nest 封装的 res。重定向。自定义响应状态码

- controller3 获取前端传递过来参数的问题。多个装饰器。还有如果获取请求头的装饰器

- controller4 TS 中的先定义很重要(代码提示很舒服)。DTO 的作用，主要是后续契合验证和转换
