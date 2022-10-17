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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const swagger_1 = require("@nestjs/swagger");
const product_schema_1 = require("./product.schema");
const create_product_dto_1 = require("./dto/create-product.dto");
const platform_express_1 = require("@nestjs/platform-express");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    createProducts(ProductDto, categoryId, images) {
        return this.productService.createProducts(ProductDto, images, categoryId);
    }
    getAllProducts() {
        return this.productService.getAllProducts();
    }
    getOneProductsId(id) {
        return this.productService.getOneProductsId(id);
    }
    getProductsСategory(categoryId) {
        return this.productService.getProductsСategory(categoryId);
    }
    deleteProduct(id) {
        return this.productService.deleteProduct(id);
    }
    changeProduct(ProductDto, id, images) {
        return this.productService.changeProduct(ProductDto, id, images);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить продукт' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: product_schema_1.Product }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/createProduct/:categoryId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('categoryId')),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, String, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все продукты' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_schema_1.Product] }),
    (0, common_1.Get)('/productsAll/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить продукт по id товара' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: product_schema_1.Product }),
    (0, common_1.Get)('/product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getOneProductsId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить продукт по категории id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_schema_1.Product] }),
    (0, common_1.Get)('/productsCategory/:categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getProducts\u0421ategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить товар по id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: product_schema_1.Product }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/deleteProduct/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'изменить товар по id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: product_schema_1.Product }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images')),
    (0, common_1.Post)('/changeProduct/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, String, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "changeProduct", null);
ProductController = __decorate([
    (0, swagger_1.ApiTags)('Продукты'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map