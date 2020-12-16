import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configService } from './config/config.service'
import { ItemModule } from './item/item.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ItemModule,
    UserModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
