import { FastifyReply, FastifyRequest } from 'fastify';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BusinessException } from './business.exception';

//捕捉HTTP相关异常
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();
    const status = exception.getStatus();
    //是否直接打印异常信息
    // request.log.error(exception);
    if (exception instanceof BusinessException) {
      const error = exception.getResponse();

      response.status(HttpStatus.OK).send({
        data: null,
        status: error['code'],
        extra: {},
        message: error['message'],
        success: false,
      });
    }
    console.log('HTTP标准异常', exception.getResponse()['message']);
    //HTTP 标准异常的处理。
    response.status(status).send({
      statusCode: status,
      timestamp: new Date().toLocaleString(),
      path: request.url,
      method: request.method,
      details: exception.getResponse(),
    });
  }
}
