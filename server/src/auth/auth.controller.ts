import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { AuthService } from './auth.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import {ValidationPipe} from '../pipes/validation.pipe'


@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @UsePipes(ValidationPipe)
    @Post('/registration')
    register(@Body() userDto: CreateUserDto) {
        return this.authService.register(userDto)
    }


}




