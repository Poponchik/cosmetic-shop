import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'

import { Product } from '../product/product.schema'




export type ReviewDocument = Review & Document
@Schema()
export class Review {
  @ApiProperty({ example: 'id продукта' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Product })
  productId: mongoose.Schema.Types.ObjectId

  @ApiProperty({ example: 'отзыв' })
  @Prop({ required: true })
  review: string

  @ApiProperty({ example: 'username', description: 'имя пользователя' })
  @Prop({ required: true })
  name: string

}

export const ReviewSchema = SchemaFactory.createForClass(Review)



