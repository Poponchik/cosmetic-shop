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
exports.ProductsInOrder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
const product_schema_1 = require("../product/product.schema");
let ProductsInOrder = class ProductsInOrder {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'общая сумма заказа' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], ProductsInOrder.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id товаров' }),
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: () => product_schema_1.Product }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], ProductsInOrder.prototype, "productId", void 0);
ProductsInOrder = __decorate([
    (0, mongoose_1.Schema)()
], ProductsInOrder);
exports.ProductsInOrder = ProductsInOrder;
//# sourceMappingURL=productsInOrder.schema.js.map