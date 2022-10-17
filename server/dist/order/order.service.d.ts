/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderDocument } from './order.schema';
import { ProductDocument } from '../product/product.schema';
import { UsersService } from '../users/users.service';
import { MailerService } from '../mailer/mailer.service';
export declare class OrderService {
    private orderModel;
    private productService;
    private jwtService;
    private userService;
    private mailerService;
    constructor(orderModel: Model<OrderDocument>, productService: Model<ProductDocument>, jwtService: JwtService, userService: UsersService, mailerService: MailerService);
    createOrder(orderDto: CreateOrderDto, status: any, req: any): Promise<import("mongoose").Document<unknown, any, OrderDocument> & Order & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getOrderById(userId: string): Promise<(import("mongoose").Document<unknown, any, OrderDocument> & Order & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
