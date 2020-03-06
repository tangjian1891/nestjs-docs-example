import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // 这个属性不可靠.是被全局共享的。这里只做测试访问次数
  private name = '这是初始化的访问啊a';
  private index: number = 0;

  // 每次访问这个路由.调用这个函数都会在这个属性上增加1
  show() {
    this.index += 1;
    return this.name + '访问了多少次啊' + this.index;
  }
}
