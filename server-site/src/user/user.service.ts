import { Repository } from 'typeorm';
import { HttpException, Inject, Injectable, Logger } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

function md5(str: string) {
  const hast = crypto.createHash('md5');
  hast.update(str);
  return hast.digest('hex');
}

@Injectable()
export class UserService {
  private logger = new Logger();
  @InjectRepository(User)
  private userRepository: Repository<User>;

  async register(user: RegisterDto) {
    const foundUser = await this.userRepository.findOneBy({
      name: user.username,
    });

    if (foundUser) {
      return { message: '用户已存在' };
    }
    const newUser = new User();
    newUser.name = user.username;
    newUser.password = md5(user.password);

    try {
      this.userRepository.save(newUser);
      return { message: '注册成功' };
    } catch (error) {
      this.logger.error(error, UserService);
      return { message: '注册失败' };
    }
  }

  async login(user: LoginDto) {
    const foundUser = await this.userRepository.findOneBy({
      name: user.username,
    });
    return foundUser;
  }
}
