import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './common/configs/config';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true, isGlobal: true, load: [config] }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
