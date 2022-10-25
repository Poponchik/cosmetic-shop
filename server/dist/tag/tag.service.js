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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tag_schema_1 = require("./tag.schema");
let TagService = class TagService {
    constructor(tagModel) {
        this.tagModel = tagModel;
    }
    async createTags(TagDto) {
        const tag = await this.tagModel.create({ tag: TagDto.tag });
        return tag;
    }
    async getAllTags() {
        const tag = await this.tagModel.find();
        return tag;
    }
    async deleteTag(_id) {
        await this.tagModel.deleteOne({ _id });
        return 'Remove ' + _id;
    }
    async changeTag(TagDto, _id) {
        const tag = await this.tagModel.findOneAndUpdate({ _id }, { '$set': TagDto }, { new: true });
        return tag;
    }
};
TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tag_schema_1.Tag.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map