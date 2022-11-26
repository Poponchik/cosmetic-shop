
import { Body, Controller, Post, Get, Param, Req, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Request } from 'express'

import { CreateOrderDto } from './dto/create-order.dto'
import { OrderService } from '../order/order.service'
import { Order } from './order.schema'
import { Status } from '../shared/index'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'


@ApiTags('Заказы')
@Controller('order')
export class OrderController {
    
    constructor(private orderService: OrderService) { }
    
    @ApiOperation({ summary: 'Добавить заказ' })
    @ApiResponse({ status: 200, type: Order })
    @Post('/createOrder/')
    createOrder(
        @Req() req: Request,
        @Body() orderDto: CreateOrderDto) {
        return this.orderService.createOrder(orderDto, Status.InProcessing, req )
    }


    @ApiOperation({ summary: 'Получить ордера по userId' })
    @ApiResponse({ status: 200, type: Order })
    @UseGuards(JwtAuthGuard)
    @Get('/orders')
    getOrderById(@Req() req: any) {
        const userId = req.user._id
        return this.orderService.getOrderById(userId)
    }

}
