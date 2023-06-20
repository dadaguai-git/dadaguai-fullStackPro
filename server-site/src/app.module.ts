import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getConfig } from './utils';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    //连接数据库
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_CONFIG.host'),
        port: parseInt(configService.get('MYSQL_CONFIG.port')),
        username: configService.get('MYSQL_CONFIG.username'),
        password: configService.get('MYSQL_CONFIG.password'),
        database: configService.get('MYSQL_CONFIG.database'),
        synchronize: true,
        //开启自定注入实例 需要再TypeOrmModule.forFeature添加
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: {
        expiresIn: '24h',
      },
    }),
    UserModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   //注册全局守卫
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class AppModule {}
