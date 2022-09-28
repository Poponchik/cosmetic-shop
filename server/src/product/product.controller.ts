import { Body, Controller, Post, Get, Delete, Param, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ProductService } from './product.service'
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { Product } from "./product.schema"
import { CreateProductDto } from "./dto/create-product.dto"
import { FileInterceptor } from "@nestjs/platform-express"




@ApiTags('Продукты')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }


    @ApiOperation({ summary: 'Добавить продукт' })
    @ApiResponse({ status: 200, type: Product })
    @UseInterceptors(FileInterceptor('image'))
    @Post('/createProduct/')
    createProducts(
        @Body() ProductDto: CreateProductDto,
        @UploadedFile() image) {
        return this.productService.createProducts(ProductDto, image)
    }


    @ApiOperation({ summary: 'Получить все продукты' })
    @ApiResponse({ status: 200, type: [Product] })
    @Get()
    getAllProducts() {
        return this.productService.getAllProducts()
    }

    @ApiOperation({ summary: 'Получить продукт по id товара' })
    @ApiResponse({ status: 200, type: Product })
    @Get('/getOneProductsId/:id')
    getOneProductsId(@Param('id') id: string) {
        return this.productService.getOneProductsId(id)
    }

    @ApiOperation({ summary: 'Получить продукт по категории' })
    @ApiResponse({ status: 200, type: [Product] })
    @Post('/productsCategory/')
    getProductsСategory(@Body() categoryProduct: Object) {
        return this.productService.getProductsСategory(categoryProduct)
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
