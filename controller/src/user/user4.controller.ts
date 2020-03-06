import { Controller, Get, Post, Body } from '@nestjs/common';
// 请求的有效载荷.payload.
// DTO:数据传输对象Data transfer object
/**
 *  在ts中，你要遵循先定义，再使用。TS不能让你无中生友，你这个class没有定义name,
 * 那么你的实例.name时，ts就会警告你这个憨憨。
 * 当然你也可以觉得ts是个铁憨憨，毕竟鸭子模型在这里摆着。
 */
// 之前Body接收的参数,感觉像js里面字面量的对象一样，想怎么来怎么来。
// DTO。就是让你提前定义好class，直接把body接收到的参数塞到这个class定义的实例中

// 你可以抽离到dto文件。我就直接在这里定义了
class UserDto {
  name: string;
  age: number;
  flag: boolean;
}

@Controller('user4')
export class User4Controller {
  @Post('1')
  test1(@Body() userDto: UserDto) {
    // 使用postman发送请求。body中多发一个descript属性
    console.log(userDto); //打印的话。你body属性里面有多少就能看到多少
    // console.log(userDto.descript);//你点一个dtoClass 没有定义的就会警告你
    // console.log(userDto['descript']);//你可以使用属性表达式绕开ts-.-.
    return '主要品上面的代码';
    // 你可能觉得DTO简直多此一举，脱裤子-。-。行为。
    //  因为后面DTO会直接注入Pipe管道，你可以校验||转换 参数
    // validator ||transform 。后端必要的参数校验工作，大量的ifelse在此发生。
    // 为什么用class定义DTO不用interface接口。
    // class为es6标准。ts会编译会保留。运行时需要用到dto，原生保留好一点，pipes需要元变量
    // 如果只是接受单个参数。我觉的直接在controller里面写也是不错的。该简化就要简化一下
  }
}
