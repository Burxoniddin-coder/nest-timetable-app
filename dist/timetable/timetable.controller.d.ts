import { TimetableService } from './timetable.service';
import { Timetable } from './schemas/timetable.schema';
export declare class TimetableController {
    private readonly timetableService;
    constructor(timetableService: TimetableService);
    findAll(): Promise<Timetable[]>;
    findOne(id: string): Promise<Timetable>;
    create(post: Timetable): Promise<Timetable>;
    update(id: string, post: Timetable): Promise<Timetable>;
    delete(id: string): Promise<Timetable>;
}
