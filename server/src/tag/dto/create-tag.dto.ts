import { ApiProperty } from '@nestjs/swagger'





export class CreateTagDto {
    @ApiProperty({ example: 'тег' })
    readonly name: string
}



