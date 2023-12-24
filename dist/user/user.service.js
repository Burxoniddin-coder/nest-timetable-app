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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("./schema/user.schema");
let UserService = UserService_1 = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async register(registerDto) {
        try {
            const user = new this.userModel({ ...registerDto });
            await user.save();
            return user;
        }
        catch (e) {
            if (e.code === 11000) {
                throw new common_1.ConflictException('This email address has already been used.');
            }
            else {
                this.logger.error('Error creating user. Details:', e);
                throw new common_1.InternalServerErrorException(e);
            }
        }
    }
    async findByEmail(email) {
        return this.userModel.findOne({ email: email });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
//# sourceMappingURL=user.service.js.map