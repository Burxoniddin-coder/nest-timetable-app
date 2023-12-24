import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly tasksService;
    constructor(tasksService: TaskService);
    registerUser(registerDto: CreateTaskDto): Promise<any>;
    getAllTasks(): Promise<any>;
}
