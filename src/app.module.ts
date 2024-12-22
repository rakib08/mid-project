import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Change to your PostgreSQL host if needed
      port: 5432,
      username: 'postgres', // Replace with your username
      password: 'rakib08', // Replace with your password
      database: 'postgres', // Replace with your database name
      entities: [User],
      synchronize: true, // Automatically sync tables (not recommended in production)
    }),
    AuthModule,
  ],
})
export class AppModule {}