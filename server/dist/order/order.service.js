"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const order_schema_1 = require("./order.schema");
const product_schema_1 = require("../product/product.schema");
const users_service_1 = require("../users/users.service");
const mailer_service_1 = require("../mailer/mailer.service");
let OrderService = class OrderService {
    constructor(orderModel, productService, jwtService, userService, mailerService) {
        this.orderModel = orderModel;
        this.productService = productService;
        this.jwtService = jwtService;
        this.userService = userService;
        this.mailerService = mailerService;
    }
    async createOrder(orderDto, status, req) {
        let sum = 0;
        const productIdsFromOrder = orderDto.products.map(product => product.productId);
        const products = await this.productService.find({ _id: { $in: productIdsFromOrder } });
        const priceObject = {};
        for (const product of products) {
            priceObject[product._id] = product.price;
        }
        for (const product of orderDto.products) {
            const objectIdToString = String(product.productId);
            if (product.quantity < 1 || !objectIdToString)
                continue;
            sum += priceObject[objectIdToString] * product.quantity;
        }
        const authHeader = req.headers.authorization;
        let userId;
        let toMailer = {
            to: orderDto.email,
            subject: 'Ваш заказ в магазине COSMETIC-SHOP',
            from: 'grxo48et@ukr.net',
            html: '<h1>order</h1>'
        };
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            const { email } = this.jwtService.verify(token);
            userId = (await this.userService.getUserByEmail(email))._id;
        }
        const order = await this.orderModel.create(Object.assign(Object.assign({}, orderDto), { status, totalPrice: sum, userId }));
        toMailer.html = `<h4>
        Ваш адрес: ${order.address}<br>
        Статус заказа: ${order.status}<br>
        Сумма заказа: ${order.totalPrice}грн.
        </h4>`;
        return order;
    }
    async getOrderById(userId) {
        const orders = await this.orderModel.find({ userId });
        return orders;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(order_schema_1.Order.name)),
    __param(1, (0, mongoose_2.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        jwt_1.JwtService,
        users_service_1.UsersService,
        mailer_service_1.MailerService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map