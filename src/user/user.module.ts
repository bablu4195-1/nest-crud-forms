import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
PassportModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
