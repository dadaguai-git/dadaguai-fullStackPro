import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';

import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post('login')
  login(@Body(new ValidationPipe()) userLogin: LoginDto) {
    console.log(userLogin);
  }
  @Post('register')
  async register(@Body(new ValidationPipe()) register: RegisterDto) {
    console.log(register);
    return await this.userService.register(register);
  }
}
