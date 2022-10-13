import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { User } from '../users/user.schema'
import { Document } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Product } from '../product/product.schema'

export type ProductsInOrderDocument = ProductsInOrder & Document

@Schema()
export class ProductsInOrder {

  @ApiProperty({ example: 'общая сумма заказа' })
  @Prop({ required: true })
  quantity: number

  @ApiProperty({ example: 'id товаров' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Product })
  productId: mongoose.Schema.Types.ObjectId

}




