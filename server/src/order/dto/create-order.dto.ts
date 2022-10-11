import { ApiProperty } from '@nestjs/swagger'
import * as mongoose from 'mongoose'

// export interface IProducts {
//     [products: string]: 
//         {
//             productId: mongoose.Schema.Types.ObjectId
//             quantity: number
//     },
    
// }


export class CreateOrderDto {
    @ApiProperty({ example: 'массив id товаров и количество' })
    readonly products: CreateProductsInOrderDto[]

    @ApiProperty({ example: 'id юзера' })
    readonly userId: mongoose.Schema.Types.ObjectId
    
    // @ApiProperty({ example: 'id product' })
    // readonly productId: mongoose.Schema.Types.ObjectId
    
    @ApiProperty({ example: 'номер заказа' })
    readonly numberPhone: string
    
    @ApiProperty({ example: 'адрес доставки', description: 'Чистяковская 15' })
    readonly address: string
    
    @ApiProperty({ example: 'email' })
    readonly email: string
    
    @ApiProperty({ example: 'статус', description: 'выполнено' })
    readonly status: string

    @ApiProperty({ example: 'дата заказа', description: '15.10.2022' })
    readonly timestamp: string


    @ApiProperty({ example: 'общая сумма заказа' })
    readonly totaAmount: number


}

export class CreateProductsInOrderDto {
    @ApiProperty({ example: 'количество' })
    readonly quantity: number

    @ApiProperty({ example: 'id product' })
    readonly productId: mongoose.Schema.Types.ObjectId
}



