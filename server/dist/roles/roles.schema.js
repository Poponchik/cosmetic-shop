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
exports.Store_RolesSchema = exports.Store_Roles = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Store_Roles = class Store_Roles {
};
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true, default: 'USER' }),
    __metadata("design:type", String)
], Store_Roles.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Store_Roles.prototype, "description", void 0);
Store_Roles = __decorate([
    (0, mongoose_1.Schema)()
], Store_Roles);
exports.Store_Roles = Store_Roles;
exports.Store_RolesSchema = mongoose_1.SchemaFactory.createForClass(Store_Roles);
//# sourceMappingURL=roles.schema.js.map