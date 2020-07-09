import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
const dotenv = require('dotenv');
dotenv.config();


async function bootstrap() {
  const logger = new Logger('bootstrap')

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.RUN_PORT);

  logger.log(`App listening on port ${process.env.RUN_PORT}`)
}
bootstrap();
