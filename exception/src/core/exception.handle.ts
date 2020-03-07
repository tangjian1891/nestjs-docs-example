import { HttpException, HttpStatus } from '@nestjs/common';

export class ParamsException extends HttpException {
  // 自定义的异常是无法扩充属性的。因为即使你扩充，在处理异常的响应层也不会取你的属性
  // 不过第一个参数是Object类型，已经完全符合了你的需求
  // 使用的话直接。throw new ParamsException()抛出即可
  constructor() {
    super('这是一个自定义的异常', HttpStatus.FORBIDDEN);
  }
}
