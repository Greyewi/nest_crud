import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { configService } from './config/config.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  if (!configService.isProduction()) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('CRUD API')
        .setDescription('Simple crud api for Greyewi`s pupils')
        .build(),
    )

    SwaggerModule.setup('swagger', app, document)
  }

  await app.listen(3000)
}

bootstrap()
