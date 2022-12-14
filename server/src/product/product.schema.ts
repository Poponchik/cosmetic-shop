import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Category } from '../category/category.schema'
import { Tag } from '../tag/tag.schema'
import * as mongoose from 'mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product {

  @ApiProperty({ example: 'категория товара', description: 'крема' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Category })
  categoryId: Category

  @ApiProperty({ example: 'массив id тегов', description: '[1213б 1233]' })
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: () => Tag })
  tagsId: Tag[]
  
  @ApiProperty({ example: 'название товара', description: 'крем' })
  @Prop({ required: true })
  name: string

  @ApiProperty({ example: 'описание товара', description: 'от морщин' })
  @Prop({ required: true })
  description: string

  @ApiProperty({ example: 'фотографии товара' })
  @Prop([String])
  images: string[]
  
  @ApiProperty({ example: 'цена товара' })
  @Prop({ required: true })
  price: number

}

export const ProductSchema = SchemaFactory.createForClass(Product)


