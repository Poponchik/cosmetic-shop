
import { Body, Controller, Post, Get, Delete, Param, UploadedFiles, UseInterceptors, UseGuards } from '@nestjs/common'
import { OrderService } from './order.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Order } from './order.schema'
import { CreateOrderDto } from './dto/create-order.dto'
import { FilesInterceptor } from '@nestjs/platform-express'

import { Roles } from '../auth/roles-auth.decorator'
import { RolesGuard } from '../auth/roles.guard'
import { Role } from '../shared/index'




@ApiTags('Заказы')
@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService) { }



    @ApiOperation({ summary: 'Добавить заказ' })
    @ApiResponse({ status: 200, type: Order })
    // @Roles(Role.ADMIN)
    // @UseGuards(RolesGuard)
    @Post('/createOrder/')
    createOrder(
        @Body() OrderDto: CreateOrderDto,
        @Param('userId') userId: string) {
        return this.orderService.createOrder(OrderDto, userId)
    }


    // @ApiOperation({ summary: 'Получить заказы по email' })
    // @ApiResponse({ status: 200, type: Order })
    // @Get('/product/:id')
    // getOrderByEmail(@Param('id') id: string) {
    //     return this.orderService.getOrderByEmail(id)
    // }

    // @ApiOperation({ summary: 'Удалить заказ по id' })
    // @ApiResponse({ status: 200, type: Order })
    // @Roles(Role.ADMIN)
    // @UseGuards(RolesGuard)
    // @Delete('/deleteProduct/:id')
    // deleteOrder(@Param('id') id: string) {
    //     return this.orderService.deleteOrder(id)
    // }

    // @ApiOperation({ summary: 'изменить заказ по id' })
    // @ApiResponse({ status: 200, type: Order })
    // @Roles(Role.ADMIN)
    // @UseGuards(RolesGuard)
    // @UseInterceptors(FilesInterceptor('images'))
    // @Post('/changeProduct/:id')
    // changeOrder(
    //     @Body() ProductDto: CreateOrderDto,
    //     @Param('id') id: string,
    //     @UploadedFiles() images) {
    //     return this.orderService.changeOrder(ProductDto, id, images)
    // }

    // @ApiOperation({ summary: 'изменить статус заказа' })
    // @ApiResponse({ status: 200, type: Order })
    // @Roles(Role.ADMIN)
    // @UseGuards(RolesGuard)
    // @UseInterceptors(FilesInterceptor('images'))
    // @Post('/changeProduct/:id')
    // changeStatusOrder(
    //     @Body() ProductDto: CreateOrderDto,
    //     @Param('id') id: string,
    //     @UploadedFiles() images) {
    //     return this.orderService.changeStatusOrder(ProductDto, id, images)
    // }


}
