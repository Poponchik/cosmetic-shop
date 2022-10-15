import { Request } from 'express';
import { OrderService } from '../order/order.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(req: Request, orderDto: CreateOrderDto): Promise<import("../order/order.schema").Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOrderById(id: string): Promise<(import("../order/order.schema").Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
