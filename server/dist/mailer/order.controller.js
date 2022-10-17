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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_service_1 = require("../order/order.service");
const order_schema_1 = require("./order.schema");
const create_order_dto_1 = require("./dto/create-order.dto");
const index_1 = require("../shared/index");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(req, orderDto) {
        return this.orderService.createOrder(orderDto, index_1.Status.InProcessing, req);
    }
    getOrderById(id) {
        return this.orderService.getOrderById(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить заказ' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_schema_1.Order }),
    (0, common_1.Post)('/createOrder/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить ордера по userId' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: order_schema_1.Order }),
    (0, common_1.Get)('/order/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrderById", null);
OrderController = __decorate([
    (0, swagger_1.ApiTags)('Заказы'),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map