import {
  Controller,
  Get,
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
  NotAcceptableException,
  ConflictException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ParamsException } from 'src/core/exception.handle';

@Controller('user2')
export class User2Controller {
  // 自定义的异常
  @Get('1')
  paramsError() {
    //  直接抛出自定义的异常
    throw new ParamsException();
  }
  // 使用一些内置的子类异常
  @Get('2')
  resError() {
    throw new ServiceUnavailableException();
  }
}
