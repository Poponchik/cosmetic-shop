import { Body, Controller, Post, Get, Delete, Param, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { ProductService } from './product.service'
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { Product } from "./product.schema"
import { CreateProductDto } from "./dto/create-product.dto"
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express"




@ApiTags('Продукты')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }




    @ApiOperation({ summary: 'Добавить продукт' })
    @ApiResponse({ status: 200, type: Product })
    @Post('/createProduct/')
    @UseInterceptors(FilesInterceptor('image'))
    createProducts(
        @Body() ProductDto: CreateProductDto,
        @UploadedFiles() image) {
        // @uploadMultipleFiles() image) {
        // console.log('image::', image)


        return this.productService.createProducts(ProductDto, image)
    }


    @ApiOperation({ summary: 'Получить все продукты' })
    @ApiResponse({ status: 200, type: [Product] })
    @Get('/productsAll/:userId')
    getAllProducts(@Param('userId') userId: string) {
        return this.productService.getAllProducts(userId)
    }

    @ApiOperation({ summary: 'Получить продукт по id товара' })
    @ApiResponse({ status: 200, type: Product })
    @Get('/product/:id')
    getOneProductsId(@Param('id') id: string) {
        return this.productService.getOneProductsId(id)
    }
    @ApiOperation({ summary: 'Получить продукт по категории' })
    @ApiResponse({ status: 200, type: [Product] })
    @Get('/productsCategory/:categoryId')
    getProductsСategory(@Param('categoryId') categoryId: string) {
        return this.productService.getProductsСategory(categoryId)
    }
    @ApiOperation({ summary: 'Удалить товар по id' })
    @ApiResponse({ status: 200, type: Product })
    @Delete('/deleteProduct/:id')
    deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id)
    }

    @ApiOperation({ summary: 'изменить товар по id' })
    @ApiResponse({ status: 200, type: Product })
    @Post('/changeProduct/:id')
    changeProduct(
        @Body() ProductDto: CreateProductDto,
        @Param('id') id: string
    ) {
        return this.productService.changeProduct(ProductDto, id)
    }




}
