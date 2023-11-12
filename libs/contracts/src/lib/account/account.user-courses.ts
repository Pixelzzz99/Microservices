import {IUserCources} from '@purple/interfaces';
import { IsString } from 'class-validator';

export namespace AccountUserCources {
  export const topic = 'account.user-courses.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    courses: IUserCources[];
  }
}
