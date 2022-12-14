import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'

import { User } from '../users/user.schema'
import { ProductsInOrder } from './productsInOrder.schema'




export type OrderDocument = Order & Document
@Schema()
export class Order {
  @ApiProperty({ example: 'id юзера' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => User })
  userId: mongoose.Schema.Types.ObjectId

  @ApiProperty({ example: 'email' })
  @Prop({ required: true })
  email: string

  @ApiProperty({ example: 'номер заказа' })
  @Prop({ required: true })
  numberPhone: string

  @ApiProperty({ example: 'статус', description: 'выполнено' })
  @Prop({ required: true })
  status: string

  @ApiProperty({ example: 'адрес доставки', description: 'Чистяковская 15' })
  @Prop({ required: true })
  address: string

  @ApiProperty({ example: 'общая сумма заказа' })
  @Prop({ required: true })
  totalPrice: number

  @ApiProperty({ example: 'дата заказа', description: '15.10.2022' })
  @Prop({ type: Date, default: Date.now })
  timestamp: string

  @ApiProperty({ example: 'массив id товаров и колиество' })
  @Prop([ProductsInOrder])
  products: [ProductsInOrder]

}

export const OrderSchema = SchemaFactory.createForClass(Order)



