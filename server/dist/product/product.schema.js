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
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const category_schema_1 = require("../category/category.schema");
const tag_schema_1 = require("../tag/tag.schema");
const mongoose = require("mongoose");
let Product = class Product {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'категория товара', description: 'крема' }),
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: () => category_schema_1.Category }),
    __metadata("design:type", category_schema_1.Category)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'массив id тегов', description: '[1213б 1233]' }),
    (0, mongoose_1.Prop)({ type: [mongoose.Schema.Types.ObjectId], ref: () => tag_schema_1.Tag }),
    __metadata("design:type", Array)
], Product.prototype, "tagsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'название товара', description: 'крем' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'описание товара', description: 'от морщин' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'фотографии товара' }),
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'цена товара' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)()
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map