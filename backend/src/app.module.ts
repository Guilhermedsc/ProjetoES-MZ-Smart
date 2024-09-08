import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { DevicesModule } from './devices/devices.module'

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DevicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
