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
exports.TimetableController = void 0;
const common_1 = require("@nestjs/common");
const timetable_service_1 = require("./timetable.service");
const timetable_schema_1 = require("./schemas/timetable.schema");
let TimetableController = class TimetableController {
    constructor(timetableService) {
        this.timetableService = timetableService;
    }
    async findAll() {
        return await this.timetableService.findAll();
    }
    async findOne(id) {
        return await this.timetableService.findOne(id);
    }
    async create(post) {
        return await this.timetableService.create(post);
    }
    async update(id, post) {
        return await this.timetableService.update(id, post);
    }
    async delete(id) {
        return await this.timetableService.delete(id);
    }
};
exports.TimetableController = TimetableController;
__decorate([
    (0, common_1.Get)('getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getbyid:id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [timetable_schema_1.Timetable]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('edit:id'),
    __param(0, (0, common_1.Param)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, timetable_schema_1.Timetable]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('del:id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "delete", null);
exports.TimetableController = TimetableController = __decorate([
    (0, common_1.Controller)('timetables'),
    __metadata("design:paramtypes", [timetable_service_1.TimetableService])
], TimetableController);
//# sourceMappingURL=timetable.controller.js.map