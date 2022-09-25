import {ApiProperty} from '@nestjs/swagger'
import * as mongoose from 'mongoose'





export class CreateUserDto {

    @ApiProperty({example: '1', description: 'id пользователя'})
    readonly _id: mongoose.Types.ObjectId

    @ApiProperty({ example: 'username', description: 'имя пользователя' })
    readonly name: string

    @ApiProperty({example: 'user@gmail.com', description: 'почтовый адрес'})
    readonly email: string

    @ApiProperty({example: '12345', description: 'Пароль'})
    readonly password: string
}








