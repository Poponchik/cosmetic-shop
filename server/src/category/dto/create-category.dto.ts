import { ApiProperty } from '@nestjs/swagger'





export class CreateCaterogyDto {
    @ApiProperty({ example: 'category', description: 'категория товаров' })
    readonly name: string
}







