import { Body, Controller, Post, Get, Delete, Param, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { CategoryService } from './category.service'
import { Category } from './category.schema'
import { CreateCategoryDto } from './dto/create-category.dto'
import { Roles } from '../auth/roles-auth.decorator'
import { RolesGuard } from '../auth/roles.guard'
import { Role } from '../shared/index'


@ApiTags('Категории')
@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }


    @ApiOperation({ summary: 'Добавить категорию' })
    @ApiResponse({ status: 200, type: Category })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @Post('/createCategory/')
    createCategory(@Body() CategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(CategoryDto)
}

    @ApiOperation({ summary: 'Получить все категории' })
    @ApiResponse({ status: 200, type: [Category] })
    @Get('/categoryAll/')
    getAllCategory() {
        return this.categoryService.getAllCategory()
    }


    @ApiOperation({ summary: 'Удалить категорию по id' })
    @ApiResponse({ status: 200, type: Category })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @Delete('/deleteCategory/:id')
    deleteCategory(@Param('id') id: string) {
        return this.categoryService.deleteCategory(id)
    }

    @ApiOperation({ summary: 'изменить категорию по id' })
    @ApiResponse({ status: 200, type: Category })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @Post('/changeCategory/:id')
    changeCategory(
        @Body() CategoryDto: CreateCategoryDto,
        @Param('id') id: string) {
        return this.categoryService.changeCategory(CategoryDto, id)
    }


}
