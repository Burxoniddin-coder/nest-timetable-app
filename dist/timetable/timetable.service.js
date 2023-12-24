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
exports.TimetableService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TimetableService = class TimetableService {
    constructor(timetableModel) {
        this.timetableModel = timetableModel;
    }
    async findAll() {
        return await this.timetableModel.find().exec();
    }
    async findOne(id) {
        return await this.timetableModel.findById(id).exec();
    }
    async create(timetable) {
        const newtimetable = new this.timetableModel(timetable);
        return await newtimetable.save();
    }
    async update(id, timetable) {
        return await this.timetableModel.findByIdAndUpdate(id, timetable, { new: true });
    }
    async delete(id) {
        return await this.timetableModel.findByIdAndRemove(id);
    }
};
exports.TimetableService = TimetableService;
exports.TimetableService = TimetableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('timetable')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TimetableService);
//# sourceMappingURL=timetable.service.js.map