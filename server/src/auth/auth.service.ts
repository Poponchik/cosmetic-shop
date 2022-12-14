import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'

import { UsersService } from '../users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { User, UserDocument } from '../users/user.schema'





@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtServise: JwtService) { }

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }


    async register(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({ ...userDto, password: hashPassword })
        return this.generateToken(user)
    }


    private async generateToken(user: UserDocument) {
        const payload = {
            _id: user._id,
            email: user.email,
            role: user.role
        }
        return {
            token: this.jwtServise.sign(payload)
        }
    }


    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        if(!user) {
            throw new UnauthorizedException({ message: 'Некорретный емейл или пароль' })
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user?.password)
        if (user && passwordEquals) {
            return user
        }
    }
}
