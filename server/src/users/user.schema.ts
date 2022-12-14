import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from '../shared/index'

export type UserDocument = User & Document

@Schema()
export class User {
  @ApiProperty({ example: 'username', description: 'имя пользователя' })
  @Prop({ required: true })
  name: string
  
  @ApiProperty({ example: 'user@gmail.com', description: 'почтовый адрес' })
  @Prop({ unique: true, required: true })
  email: string

  @ApiProperty({ example: '12345', description: 'Пароль' })
  @Prop({ required: true })
  password: string

  @ApiProperty({ example: 'роль' })
  @Prop({default: Role.USER})
  role: string
}

export const UserSchema = SchemaFactory.createForClass(User)


