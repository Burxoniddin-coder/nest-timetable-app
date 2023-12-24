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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const create_task_dto_1 = require("./dto/create-task.dto");
const auth_guard_1 = require("../auth/auth.guard");
const task_service_1 = require("./task.service");
let TaskController = class TaskController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async registerUser(registerDto) {
        return this.tasksService.createTask(registerDto);
    }
    async getAllTasks() {
        return this.tasksService.getAllTasks();
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)('/create-task'),
    (0, common_1.UseGuards)(auth_guard_1.LocalAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Get)('/list-tasks'),
    (0, common_1.UseGuards)(auth_guard_1.LocalAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTasks", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map