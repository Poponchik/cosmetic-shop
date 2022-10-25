import { Body, Controller, Post, Get, Delete, Param, UploadedFiles, UseInterceptors, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { FilesInterceptor } from '@nestjs/platform-express'

import { ProductService } from './product.service'
import { Product } from './product.schema'
import { CreateProductDto } from './dto/create-product.dto'
import { Roles } from '../auth/roles-auth.decorator'
import { RolesGuard } from '../auth/roles.guard'
import { Role } from '../shared/index'


@ApiTags('Продукты')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }



    @ApiOperation({ summary: 'Добавить продукт' })
    @ApiResponse({ status: 200, type: Product })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @Post('/createProduct/:categoryId')
    @UseInterceptors(FilesInterceptor('images'))
    createProducts(
        @Body() ProductDto: CreateProductDto,
        @Param('categoryId') categoryId: string,
        @UploadedFiles() images) {
        return this.productService.createProducts(ProductDto, images, categoryId)
    }


    @ApiOperation({ summary: 'Получить все продукты' })
    @ApiResponse({ status: 200, type: [Product] })
    @Get('/productsAll/')
    getAllProducts() {
        return this.productService.getAllProducts()
    }
    @ApiOperation({ summary: 'Получить продукт по id товара' })
    @ApiResponse({ status: 200, type: Product })
    @Get('/product/:id')
    getOneProductsId(@Param('id') id: string) {
        return this.productService.getOneProductsId(id)
    }
    @ApiOperation({ summary: 'Получить продукт по id категории' })
    @ApiResponse({ status: 200, type: [Product] })
    @Get('/productsCategory/:categoryId')
    getProductsСategory(@Param('categoryId') categoryId: string) {
        return this.productService.getProductsСategory(categoryId)
    }
    @ApiOperation({ summary: 'Получить продукт по id тега' })
    @ApiResponse({ status: 200, type: [Product] })
    @Get('/productsTag/:tagId')
    getProductsTag(@Param('tagId') tagId: string) {
        return this.productService.getProductsTag(tagId)
    }

    @ApiOperation({ summary: 'Удалить товар по id' })
    @ApiResponse({ status: 200, type: Product })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @Delete('/deleteProduct/:id')
    deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id)
    }

    @ApiOperation({ summary: 'изменить товар по id' })
    @ApiResponse({ status: 200, type: Product })
    @Roles(Role.ADMIN)
    @UseGuards(RolesGuard)
    @UseInterceptors(FilesInterceptor('images'))
    @Post('/changeProduct/:id')
    changeProduct(
        @Body() ProductDto: CreateProductDto,
        @Param('id') id: string,
        @UploadedFiles() images) {
        return this.productService.changeProduct(ProductDto, id, images)
    }


}
