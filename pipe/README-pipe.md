pipe 管道。作用:

- 验证：评估输入数据，如果有效，只需将其原样传递即可；否则，当数据不正确时抛出异常
- 转换：将输入数据转换为所需的输出

注意:在 pipe 中出现异常。不会走路由.直接走异常过滤器

工作原理: 通过 transform 转换 ，采用验证,一定返回值 value。(有需要就修改 value 然后返回,达到进出不一致，完成数据的转换，转换需要根据业务需求编写代码)

# 起步:来一个 User 模块

验证还可以使用 Hapi 框架的 Joi 包,用起来也很舒服.这里就不介绍了
使用 Nest 推荐的 class-validator 和 class-transformer
`npm i --save class-validator class-transformer`
这个 pipe 管道功能需要两个额外的包

## 如何将 pipe 用在指定路由上?

- 参数级别路由.指定的参数方式触发路由.直接在对应的装饰器中使用
  async create(
  @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ) {

### 关于自定义的 pipe 管道的参数问题？

- value 毋庸置疑，这就是接受到的参数
- metadata
  - type param query body
  - metatype 指你的 value 接收到的数据类型.默认是 Object。 指定 DTO 就是 DTO
  - data 如果是@Body('name') 拿属性就是 name .没有就是 undeined

### 如何全局配置? 可以，但是没必要

main.ts
app.useGlobalPipes(new ValidationPipe());

TIP:

### 你是否遇到过前端传了一个 number 类型？后端接收到的确实 string?然后还要自己转换?

主要还是 Content-Type 的设置原因.

- application/x-www-form-urlencode 将数据转换为 url 编码发送.url 编码默认中文转 encdoe,所有数据为字符串，后端接收到有一步 split 切割字符串的过程。所以全是字符串

- application/json 建议使用这种格式。json 格式,后端接收到后默认解析。完整的 json 串允许类型的存在

以上仅限 body 中传输
param 和 query 还是需要自己转换的
还是针对特定的业务写 pipe

<!-- findOne(@Param('id', new ParseIntPipe()) id) -->

# pipe 的核心代码

```
  const object = plainToClass(metadata.metatype, value);
    // 这个error是一个异步的数组。每一个不符合属性都会封在一个对象总返回.判断长度即可
    const errors = await validate(object);
    console.log(errors);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }


```
