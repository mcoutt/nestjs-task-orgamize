import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config'
const dotenv = require('dotenv');
dotenv.config();


async function bootstrap() {
  const logger = new Logger('bootstrap')

  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors()
  }

  const serverConfig = config.get('server')
  await app.listen(serverConfig.port);

  logger.log(`App listening on port ${serverConfig.port}`)
}
bootstrap();
