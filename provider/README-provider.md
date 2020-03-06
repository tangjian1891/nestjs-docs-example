# Provider 提供者

其实我更喜欢叫 DI 依赖注入。

我们一般喜欢把 service 层抽离出来。在 controller 层如何使用 service 层?

- 1.第一种 js 写法
  service 层,向外暴露一个字面量的对象。采用面向过程的函数封装调用.
- 2.采用暴露一个构造函数|class 类()
  在控制层使用时，统一先创建实例对象 new Class().
- 3.DI 依赖注入
  你在控制器中定义一个属性，类型是 Service。那么程序运行时，会自动将实例对象注入你的变量.
  省去了你在每个控制器中，只要使用 service 层，都需要 new 的问题。

关键的装饰器@Injectable() 装饰需要自动 DI 的 class
被@Injectable() 的类都要在模块中注入，然后就可以在当前模块中的控制器或其他 service 中使用

// 所有需要 DI 注入的对象。都在注册在模块@Module 的 Provider 中。

例子:

- user.controller.ts 演示 DI 注入的两种形式。推荐使用构造函数。注入的实例默认是单例，属性是会被共享的。注意使用。
