import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const dotenv = require('dotenv');
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  username: process.env.DBUSER,
  password: process.env.PW,
  database: process.env.DBNAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};