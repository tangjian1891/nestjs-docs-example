import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';
// 注入的属性一定要readonly。避免误操作而导致变量指向错误。单例模式，共用一个实例对象
@Controller('user')
export class UserController {
  // 第一种方式:基于属性的映射.需要使用Inject()装饰器
  // @Inject()
  // private readonly userService: UserService;
  // 如果您的类没有扩展其他提供程序，则应始终喜欢使用基于构造函数的注入。
  // 第二种:使用构造函数的形式。与上面效果一致，但是可以省一个@Inject()装饰器
  // 记得加 readonly. 但是js的属性表达式。这个东西可以让ts无法分析出来你的语法错误，仍然可以更改
  constructor(private readonly userService: UserService) {}
  // 你可以先尝试多次调用这个路由。增加次数后。调用下面那个路由更新掉
  //  http://localhost:3000/user/add
  @Get('add')
  test2() {
    // 从注入的userService实例中调用函数
    return this.userService.show();
  }
  @Get('reset')
  test1() {
    // http://localhost:3000/user/reset
    //  可以绕过ts的静态分析直接修改readonly的属性而不被发现。js还真他娘的有意思啊
    this.userService['index'] = 0;
    return '实例被串改了';
  }
}
