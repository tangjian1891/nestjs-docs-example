import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { IsInt, IsString, IsEmail, IsBoolean } from 'class-validator';
import { User3Pipe } from './user.pipe';
// 前面两个控制器已经查看了pipe的参数
// 开始 使用管道 验证（必要DTO）
//DTO增加 class-validatore 的装饰器
export class StudentDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsEmail()
  email: string;
  @IsBoolean()
  flag: boolean;
}

@Controller('user3')
export class User3Controller {
  // 在User3Pipe有如何验证的方式
  @Post('1')
  @UsePipes(User3Pipe)
  test1(@Body() studentDto: StudentDto) {
    return studentDto;
  }

  // 不仅仅验证。还需要转换
}
