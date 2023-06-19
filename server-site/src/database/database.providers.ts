import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      new DataSource({
        type: 'mysql',
        host: '150.158.157.53',
        port: 3306,
        username: 'root',
        password: '1104choumaoHEIPI',
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
