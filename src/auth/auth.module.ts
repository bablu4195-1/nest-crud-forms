import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'constants/constants';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports:[UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, // Use a more secure key in production
      signOptions: { expiresIn: '60s' },
    }),],
  controllers:[AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
