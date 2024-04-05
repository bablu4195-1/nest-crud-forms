import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login-dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async login(logindto:LoginDto) {
        const {username, password} = logindto;
        const user = await this.userService.findOne(username);
        console.log("user",user);
        if(user && bcrypt.compareSync(password, user.password)){
            const payload = {username: user.username, sub: user._id};
            // console.log("payload",payload);
            const access_token = this.jwtService.sign(payload);
            // console.log("access_token",access_token);
            return {
                access_token: access_token
            }
        }
    }
    
}
