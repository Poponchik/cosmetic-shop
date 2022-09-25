import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { Document } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger"
// import { ObjectID } from 'bson';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: '1', description: 'id пользователя' })
  _id: mongoose.Types.ObjectId

  @ApiProperty({ example: 'username', description: 'имя пользователя' })
  @Prop({ required: true })
  name: string

  @ApiProperty({ example: 'user@gmail.com', description: 'почтовый адрес' })
  @Prop({ unique: true, required: true })
  email: string

  @ApiProperty({ example: '12345', description: 'Пароль' })
  @Prop({ required: true })
  password: string

  // @ApiProperty({example: 'true', description: 'Забанен или нет'})
  @Prop({ default: false })
  banned: boolean

  // @ApiProperty({example: 'Бот', description: 'Причина бана'})
  @Prop()
  banReason: string
}

export const UserSchema = SchemaFactory.createForClass(User)


