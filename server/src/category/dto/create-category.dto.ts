import { ApiProperty } from '@nestjs/swagger'





export class CreateCategoryDto {
    @ApiProperty({ example: 'category', description: 'категория товаров' })
    readonly name: string
}



