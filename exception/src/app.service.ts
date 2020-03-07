import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  writeLogger(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('写入成功，耗时2S');
      }, 2000);
    });
  }
}
