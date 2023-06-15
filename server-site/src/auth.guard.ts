import { FastifyReply } from 'fastify';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject(JwtService)
  private readonly jwtservice: JwtService;
  @Inject(ConfigService)
  private readonly configservice: ConfigService;
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: FastifyReply = context.switchToHttp().getRequest();

    const authorization: string = request.headers['authorization'] || '';

    const bearer = authorization.split(' ');

    if (!bearer || bearer.length < 2) {
      throw new UnauthorizedException('登录 token 错误');
    }
    const token = bearer[1];
    try {
      const info = this.jwtservice.verify(token, {
        secret: this.configservice.get('JWT_CONFIG.secret'),
      });

      (request as any).user = info.user;

      return true;
    } catch (e) {
      throw new UnauthorizedException('登录 token 失效，请重新登录');
    }
  }
}
