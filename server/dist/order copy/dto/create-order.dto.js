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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductsInOrderDto = exports.CreateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose = require("mongoose");
class CreateOrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'массив id товаров и количество' }),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id юзера' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], CreateOrderDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'номер заказа' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "numberPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'адрес доставки', description: 'Чистяковская 15' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'email' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'статус', description: 'выполнено' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'дата заказа', description: '15.10.2022' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'общая сумма заказа' }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "totalPrice", void 0);
exports.CreateOrderDto = CreateOrderDto;
class CreateProductsInOrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'количество' }),
    __metadata("design:type", Number)
], CreateProductsInOrderDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id product' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], CreateProductsInOrderDto.prototype, "productId", void 0);
exports.CreateProductsInOrderDto = CreateProductsInOrderDto;
//# sourceMappingURL=create-order.dto.js.map