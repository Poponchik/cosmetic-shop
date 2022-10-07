import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { User } from '../users/user.schema'
import { Document } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Product } from '../product/product.schema'

export type OrderDocument = Order & Document

@Schema()
export class Order {
  @ApiProperty({ example: 'id юзера' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => User })
  userId: mongoose.Schema.Types.ObjectId

  @ApiProperty({ example: 'id product' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Product })
  productId: mongoose.Schema.Types.ObjectId

  @ApiProperty({ example: 'email' })
  // @Prop({ required: true })
  @Prop()
  email: string

  @ApiProperty({ example: 'номер заказа' })
  // @Prop({ required: true })
  @Prop()
  numberPhone: string

  @ApiProperty({ example: 'статус', description: 'выполнено' })
  // @Prop({ required: true })
  @Prop()
  status: string

  @ApiProperty({ example: 'адрес доставки', description: 'Чистяковская 15' })
  @Prop({ required: true })
  address: string

  @ApiProperty({ example: 'общая сумма заказа' })
  // @Prop({ required: true })
  @Prop()
  totaAmount: number
  
  @ApiProperty({ example: 'дата заказа', description: '15.10.2022' })
  @Prop({ type: Date, default: Date.now })
  timestamp: string

  @ApiProperty({ example: 'массив id товаров' })
  @Prop([Object])
  products: Object[]

}

export const OrderSchema = SchemaFactory.createForClass(Order)



