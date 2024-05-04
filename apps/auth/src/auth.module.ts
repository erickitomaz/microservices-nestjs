import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoggerModule } from '@app/common';

@Module({
  imports: [UsersModule, LoggerModule],
})
export class AuthModule {}
