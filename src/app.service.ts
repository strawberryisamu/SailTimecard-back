import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  onWork(): string {
    return 'Hello World!';
  }
  offWork(): string {
    return 'Hello World';
  }
  culc(): string {
    return ''
  }
}


