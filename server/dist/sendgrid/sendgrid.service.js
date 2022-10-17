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
exports.SendgridService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const SendGrid = require("@sendgrid/mail");
let SendgridService = class SendgridService {
    constructor(configService) {
        this.configService = configService;
        SendGrid.setApiKey(this.configService.get('SEND_GRID_KEY'));
    }
    async send(mail) {
        const transport = await SendGrid.send(mail);
        console.log(`E-Mail sent to ${mail.to}`);
        return transport;
    }
};
SendgridService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SendgridService);
exports.SendgridService = SendgridService;
//# sourceMappingURL=sendgrid.service.js.map