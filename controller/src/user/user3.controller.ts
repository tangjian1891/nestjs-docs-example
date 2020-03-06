import { Controller, Post, Body, Query, Param } from '@nestjs/common';
//第二控制器主要是介绍.获取payload请求参数内容。
@Controller('user3')
export class User3Controller {
  @Post('test/:id')
  test1(@Body() body, @Query() query, @Param() param) {
    // post请求:localhost:3000/user3/test/9527?address=武汉&year=2020
    // body:...你自己传递吧
    // nest一步到位，都能帮你解析出来。不用再手动引用bodyparse了-.-.

    return {
      body,
      query,
      param,
    };
  }
  // body query param 是包了一层的对象。你自己打印看看
  // @Body('name') name
  // @Body() body
  //  上面的  name===body.name //true  你懂我意思吧-.-，其他同理
  // 另外还有请求头也比较常用 @Headers() headers
}
