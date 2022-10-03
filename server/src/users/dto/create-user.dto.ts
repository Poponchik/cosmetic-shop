import { ApiProperty } from '@nestjs/swagger'





export class CreateUserDto {
    @ApiProperty({ example: 'username', description: 'имя пользователя' })
    readonly name: string
    @ApiProperty({ example: 'user@gmail.com', description: 'почтовый адрес' })
    readonly email: string
    @ApiProperty({ example: '12345', description: 'Пароль' })
    readonly password: string
    @ApiProperty({ example: 'роль', description: 'USER/ADMIN' })
    readonly role: string
}







