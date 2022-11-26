import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length, IsEmail } from 'class-validator'





export class CreateUserDto {
    @ApiProperty({ example: 'username', description: 'имя пользователя' })
    readonly name: string



    @ApiProperty({ example: 'user@gmail.com', description: 'почтовый адрес' })
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорретный email'})
    readonly email: string



    @ApiProperty({ example: '12345', description: 'Пароль' })
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 64, {message: 'Пароль не меньше 4 и не больше 64 символов'})
    readonly password: string


    @ApiProperty({ example: 'роль' })
    readonly role: string
}







