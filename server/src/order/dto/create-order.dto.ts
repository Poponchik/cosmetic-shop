import { ApiProperty } from '@nestjs/swagger'
import * as mongoose from 'mongoose'




export class CreateOrderDto {

    @ApiProperty({ example: 'id юзера' })
    readonly userId: mongoose.Schema.Types.ObjectId

    @ApiProperty({ example: 'id product' })
    readonly productId: mongoose.Schema.Types.ObjectId

    @ApiProperty({ example: 'email' })
    readonly email: string

    @ApiProperty({ example: 'номер заказа' })
    readonly numberPhone: string


    @ApiProperty({ example: 'статус', description: 'выполнено' })
    readonly status: string

    @ApiProperty({ example: 'адрес доставки', description: 'Чистяковская 15' })
    readonly address: string

    @ApiProperty({ example: 'общая сумма заказа' })
    readonly totaAmount: number

    @ApiProperty({ example: 'дата заказа', description: '15.10.2022' })
    readonly timestamp: string

    @ApiProperty({ example: 'массив id товаров' })
    readonly products: Object[]

}






