import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { User } from '../users/user.schema'
import { Document } from 'mongoose'
import { ApiProperty } from "@nestjs/swagger"

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @ApiProperty({ example: 'id юзера' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => User })
  userId: mongoose.Schema.Types.ObjectId

  @ApiProperty({ example: 'название товара', description: 'крем' })
  @Prop({ required: true })
  nameProduct: string

  @ApiProperty({ example: 'описание товара', description: 'от морщин' })
  @Prop({ required: true })
  descriptionProduct: string

  @ApiProperty({ example: 'категория товара', description: 'крема' })
  @Prop({ required: true })
  categoryProduct: string

  @ApiProperty({ example: 'тег', description: '...' })
  @Prop([String])
  tagsProduct: string[]



  // @ApiProperty({ example: 'фото товара' })
  // @Prop({ required: true })
  // photoProduct: string

}

export const ProductSchema = SchemaFactory.createForClass(Product)


