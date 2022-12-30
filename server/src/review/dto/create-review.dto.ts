import { ApiProperty } from '@nestjs/swagger'
import * as mongoose from 'mongoose'


export class CreateReviewDto {

    @ApiProperty({ example: 'id продукта' })
    readonly productId: mongoose.Schema.Types.ObjectId

    @ApiProperty({ example: 'отзыв' })
    readonly review: string

    @ApiProperty({ example: 'username', description: 'имя пользователя' })
    readonly name: string

}


