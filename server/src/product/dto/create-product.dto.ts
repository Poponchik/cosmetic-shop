import { ApiProperty } from '@nestjs/swagger'
import * as mongoose from 'mongoose'




export class CreateProductDto {

    @ApiProperty({ example: 'категория товара', description: 'крема' })
    readonly categoryId: mongoose.Schema.Types.ObjectId

    @ApiProperty({ example: 'категория товара', description: 'крема' })
    readonly tagsId: [mongoose.Schema.Types.ObjectId]

    @ApiProperty({ example: 'название товара', description: 'крем' })
    readonly name: string

    @ApiProperty({ example: 'описание товара', description: 'от морщин' })
    readonly description: string

    @ApiProperty({ example: 'фото товара' })
    readonly image: string[]

    @ApiProperty({ example: 'цена товара' })
    readonly price: string
}







