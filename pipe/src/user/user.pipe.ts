import {
  PipeTransform,
  ArgumentMetadata,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { UserDto } from './user2.controller';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { StudentDto } from './user3.controller';
// 作为DI 交给Nest管理
@Injectable()
export class UserPipe implements PipeTransform {
  // 转换。 这个value的类型可以是你定义的DTO
  /**
   * metadata 是元数据
   * 属性：.metadata.type   数据是从body还是 param 还是query中的哪种.每一种都会执行一次这个函数
   * metadata.metatype
   * metadata.data
   */
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    // 返回的值就是接受到的value值。
    return Object.assign(value, {
      address: '北京a ',
    });
  }
}

// ------------------User2Controller的pipe-------------------------
export class User2Pipe implements PipeTransform {
  transform(value: UserDto, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    return value;
  }
}

// ------------------User3Controller的pipe-------------------------

export class User3Pipe implements PipeTransform {
  async transform(value: StudentDto, metadata: ArgumentMetadata) {
    // 形成一个特殊的object
    const object = plainToClass(metadata.metatype, value);
    // 这个error是一个异步的数组。每一个不符合属性都会封在一个对象总返回.判断长度即可
    const errors = await validate(object);
    console.log(errors);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    console.log(value);
    console.log(metadata);
    return value;
  }
}
