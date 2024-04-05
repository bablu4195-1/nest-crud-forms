import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}


@Post('login')
login(@Body() logindto:LoginDto ){
    console.log("login called",logindto);
    return this.authService.login(logindto);
}

}
