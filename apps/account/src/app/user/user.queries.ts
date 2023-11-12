import { Body, Controller } from '@nestjs/common';
import { AccountUserCources, AccountUserInfo } from '@purple/contracts';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { UserRepository } from './repositories/user.repository';

@Controller()
export class UserQueries {
  constructor(private readonly userRepository: UserRepository) {}

  @RMQValidate()
  @RMQRoute(AccountUserInfo.topic)
  async userInfo(
    @Body() dto: AccountUserInfo.Request
  ): Promise<AccountUserInfo.Response> {
    const user = await this.userRepository.findUserById(dto.id);
    return { user };
  }

  @RMQValidate()
  @RMQRoute(AccountUserCources.topic)
  async userCourses(
    @Body() dto: AccountUserCources.Request
  ): Promise<AccountUserCources.Response> {
    const user = await this.userRepository.findUserById(dto.id);
    return { courses: user.courses };
  }
}
