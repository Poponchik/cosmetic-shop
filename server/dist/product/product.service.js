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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const path = require("path");
const fs = require("fs");
const product_schema_1 = require("./product.schema");
const files_service_1 = require("../files/files.service");
const tag_service_1 = require("../tag/tag.service");
let ProductService = class ProductService {
    constructor(productModel, fileService, tagService) {
        this.productModel = productModel;
        this.fileService = fileService;
        this.tagService = tagService;
    }
    async createProducts(dto, images, categoryId) {
        const fileName = await this.fileService.createFile(images);
        const product = await this.productModel.create(Object.assign(Object.assign({}, dto), { images: fileName, categoryId }));
        return product;
    }
    async getAllProducts() {
        const products = await this.productModel.find();
        return products;
    }
    async getOneProductsId(_id) {
        const product = await this.productModel.findById({ _id });
        return product;
    }
    async getProductsСategory(categoryId) {
        const products = await this.productModel.find({ categoryId });
        return products;
    }
    async getProductsTag(tagId) {
        console.log(tagId);
        const products = await this.productModel.find({ tagsId: tagId });
        return products;
    }
    async deleteProduct(_id) {
        const { images } = await this.productModel.findById(_id);
        images.forEach((image) => {
            fs.rm(path.resolve(__dirname, '..', `static/${image}`), (err) => { });
        });
        await this.productModel.deleteOne({ _id });
        return 'Remove ' + _id;
    }
    async changeProduct(dto, _id, images) {
        const response = await this.productModel.findById(_id);
        response.images.forEach((image) => {
            fs.rm(path.resolve(__dirname, '..', `static/${image}`), (err) => { });
        });
        const fileName = await this.fileService.createFile(images);
        const product = await this.productModel.findOneAndUpdate({ _id }, { '$set': dto, images: fileName }, { new: true });
        return product;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        files_service_1.FilesService,
        tag_service_1.TagService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map