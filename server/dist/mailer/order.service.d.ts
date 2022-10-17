import { Order, OrderDocument } from './order.schema';
import { ProductDocument } from '../product/product.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class OrderService {
    private orderModel;
    private productService;
    private jwtService;
    private userService;
    constructor(orderModel: Model<OrderDocument>, productService: Model<ProductDocument>, jwtService: JwtService, userService: UsersService);
    createOrder(orderDto: CreateOrderDto, status: any, req: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOrderById(userId: string): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
