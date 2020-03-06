import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  search() {
    return '这是service层搜索的结果';
  }
}
