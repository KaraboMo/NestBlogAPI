import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/users/user.entity';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [User, AuthModule,UsersModule,DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
