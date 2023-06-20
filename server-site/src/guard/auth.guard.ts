import { FastifyReply, FastifyRequest } from 'fastify';
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
import router from '../common/router/index';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject(JwtService)
  private readonly jwtservice: JwtService;
  @Inject(ConfigService)
  private readonly configservice: ConfigService;

  //路由白名单
  private readonly urlList: string[] = router.routerWhiteList;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: FastifyRequest = context.switchToHttp().getRequest();

    const flag = this.hasUrl(this.urlList, request.url);
    //匹配白名单成功
    if (flag) {
      return flag;
    }

    const authorization: string = request.headers['authorization'] || '';
    const bearer = authorization.split(' ');

    if (!bearer || bearer.length < 2) {
      throw new UnauthorizedException('登录 token 错误');
    }

    try {
      const token = bearer[1];
      const info = this.jwtservice.verify(token, {
        secret: this.configservice.get('JWT_CONFIG.secret'),
      });

      (request as any).user = info.user;

      return true;
    } catch (e) {
      throw new UnauthorizedException('登录 token 失效，请重新登录');
    }
  }

  //校验是否为白名单路由
  private hasUrl(urlList: string[], url: string): boolean {
    const urlPattern = urlList.map((item) => {
      let pattern = item.replace(/\*\*/g, '.*');
      pattern = pattern.replace('/', '\\/');
      const regex = new RegExp('^' + pattern + '$');
      return regex;
    });
    return urlPattern.some((item) => item.test(url));
  }
}
