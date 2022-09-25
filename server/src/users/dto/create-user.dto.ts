import {ApiProperty} from '@nestjs/swagger'
import * as mongoose from 'mongoose'





export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'почтовый адрес'})
    readonly email: string
    @ApiProperty({example: '12345', description: 'Пароль'})
    readonly password: string
}








