import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getConfig } from './utils';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
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
    //JWT认证
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: 'dadaguai',
        signOptions: {
          expiresIn: '7d',
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
