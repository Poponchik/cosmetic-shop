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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const swagger_1 = require("@nestjs/swagger");
const category_schema_1 = require("./category.schema");
const create_category_dto_1 = require("./dto/create-category.dto");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    createCategory(categoryId) {
        return this.categoryService.createCategory(categoryId);
    }
    getAllCategory() {
        return this.categoryService.getAllCategory();
    }
    deleteCategory(id) {
        return this.categoryService.deleteCategory(id);
    }
    changeCategory(CategoryDto, id) {
        return this.categoryService.changeCategory(CategoryDto, id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить категорию' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: category_schema_1.Category }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/createCategory/:categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все категории' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [category_schema_1.Category] }),
    (0, common_1.Get)('/categoryAll/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getAllCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить категорию по id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: category_schema_1.Category }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/deleteCategory/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "deleteCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'изменить категорию по id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: category_schema_1.Category }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/changeCategory/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto, String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "changeCategory", null);
CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Категории'),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map