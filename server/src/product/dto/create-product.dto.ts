import { ApiProperty } from '@nestjs/swagger'
import * as mongoose from 'mongoose'




export class CreateProductDto {

    @ApiProperty({ example: 'id юзера' })
    readonly userId: mongoose.Schema.Types.ObjectId

    @ApiProperty({ example: 'название товара', description: 'крем' })
    readonly nameProduct: string

    @ApiProperty({ example: 'описание товара', description: 'от морщин' })
    readonly descriptionProduct: string

    @ApiProperty({ example: 'категория товара', description: 'крема' })
    readonly categoryProduct: string

    @ApiProperty({ example: 'тег', description: '...' })
    readonly tagsProduct: string[]

    @ApiProperty({ example: 'фото товара' })
    readonly image: string
}







