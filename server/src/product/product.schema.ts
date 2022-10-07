import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { User } from '../users/user.schema'
import { Document } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Category } from '../category/category.schema'

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @ApiProperty({ example: 'id юзера' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => User })
  userId: mongoose.Schema.Types.ObjectId

  @ApiProperty({ example: 'название товара', description: 'крем' })
  @Prop({ required: true })
  name: string

  @ApiProperty({ example: 'описание товара', description: 'от морщин' })
  @Prop({ required: true })
  description: string

  @ApiProperty({ example: 'категория товара', description: 'крема' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Category })
  category: Category

  @ApiProperty({ example: 'тег', description: '...' })
  @Prop([String])
  tags: string[]

  @ApiProperty({ example: 'фотографии товара' })
  @Prop([String])
  images: string[]

}

export const ProductSchema = SchemaFactory.createForClass(Product)


