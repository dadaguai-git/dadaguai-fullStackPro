import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { generateDocument } from './doc';

declare const module: any;
async function bootstrap() {
  //热重载会有缓存问题，若项目体积上来后才开启
  if (false && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  //接口版本化管理
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  //创建接口文档
  generateDocument(app);

  //设置全局前缀路径
  app.setGlobalPrefix('api');

  //全局拦截器 设置返回参数格式
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3001);
  console.log('启动了后端,地址为:http://127.0.0.1:3001/api/v1');
}
bootstrap();
