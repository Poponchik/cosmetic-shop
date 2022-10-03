import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { User } from "./user.schema"
import { Roles } from 'src/auth/roles-auth.decorator'
import {RolesGuard} from "../auth/roles.guard"
// import { JwtAuthGuard } from "../auth/jwt-auth.guard"


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {


    constructor(private usersService: UsersService) { }

    @ApiOperation({ summary: 'Создание пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({ summary: 'Получить всех пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    // @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }



}