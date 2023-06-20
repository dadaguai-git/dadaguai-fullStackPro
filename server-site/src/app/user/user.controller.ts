import { FastifyReply } from 'fastify';
import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Inject,
  Response,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Post('login')
  async login(
    @Body(new ValidationPipe()) userLogin: LoginDto,
    @Response({ passthrough: true }) res: FastifyReply,
  ) {
    try {
      const foundUser = await this.userService.login(userLogin);
      if (foundUser) {
        const token = await this.jwtService.signAsync(
          {
            foundUser,
          },
          {
            secret: this.configService.get('JWT_CONFIG.secret'),
          },
        );
        res.header('authorization', 'bearer ' + token);
        return { data: { token: `bearer ${token}` }, message: '登录成功' };
      }
    } catch (error) {
      console.log(error);
    }
  }
  @Post('register')
  async register(@Body(new ValidationPipe()) register: RegisterDto) {
    return await this.userService.register(register);
  }
  @Get('test')
  testAuth() {
    return { message: 'test' };
  }

  @Get('test1')
  testAuth1() {
    return { message: 'test' };
  }
}
