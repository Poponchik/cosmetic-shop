import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common'
import { CaterogyService } from './category.service'
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { Caterogy } from "./category.schema"
import { CreateCaterogyDto } from "./dto/create-category.dto"


@ApiTags('Категории')
@Controller('category')
export class CaterogyController {

    constructor(private caterogyService: CaterogyService) { }


    @ApiOperation({ summary: 'Добавить категорию' })
    @ApiResponse({ status: 200, type: Caterogy })
    @Post('/createCaterogy/:caterogyId')
    createCategory(@Param('caterogyId') CaterogyId: string) {
        return this.caterogyService.createCategory(CaterogyId)
    }

    @ApiOperation({ summary: 'Получить все категории' })
    @ApiResponse({ status: 200, type: [Caterogy] })
    @Get('/caterogyAll/')
    getAllCaterogy() {
        return this.caterogyService.getAllCaterogy()
    }

    // @ApiOperation({ summary: 'Получить категорию по id' })
    // @ApiResponse({ status: 200, type: Caterogy })
    // @Get('/category/:id')
    // getOneCaterogyId(@Param('id') id: string) {
    //     return this.caterogyService.getOneCaterogyId(id)
    // }

    @ApiOperation({ summary: 'Удалить категорию по id' })
    @ApiResponse({ status: 200, type: Caterogy })
    @Delete('/deleteCaterogy/:id')
    deleteCaterogy(@Param('id') id: string) {
        return this.caterogyService.deleteCaterogy(id)
    }

    @ApiOperation({ summary: 'изменить категорию по id' })
    @ApiResponse({ status: 200, type: Caterogy })
    @Post('/changeCaterogy/:id')
    changeCaterogy(
        @Body() CaterogyDto: CreateCaterogyDto,
        @Param('id') id: string) {
        return this.caterogyService.changeCaterogy(CaterogyDto, id)
    }


}
