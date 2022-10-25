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
exports.TagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tag_service_1 = require("./tag.service");
const tag_schema_1 = require("./tag.schema");
const create_tag_dto_1 = require("./dto/create-tag.dto");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const index_1 = require("../shared/index");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    createTags(TagDto) {
        return this.tagService.createTags(TagDto);
    }
    getAllTags() {
        return this.tagService.getAllTags();
    }
    deleteTag(id) {
        return this.tagService.deleteTag(id);
    }
    changeTag(TagDto, id) {
        return this.tagService.changeTag(TagDto, id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить теги' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tag_schema_1.Tag }),
    (0, roles_auth_decorator_1.Roles)(index_1.Role.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/createTags/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_dto_1.CreateTagDto]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "createTags", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все теги' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [tag_schema_1.Tag] }),
    (0, common_1.Get)('/tagAll/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagController.prototype, "getAllTags", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить тег по id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tag_schema_1.Tag }),
    (0, roles_auth_decorator_1.Roles)(index_1.Role.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/deleteTag/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "deleteTag", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'изменить тег по id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tag_schema_1.Tag }),
    (0, roles_auth_decorator_1.Roles)(index_1.Role.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/changeTag/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_dto_1.CreateTagDto, String]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "changeTag", null);
TagController = __decorate([
    (0, swagger_1.ApiTags)('Категории'),
    (0, common_1.Controller)('tag'),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map