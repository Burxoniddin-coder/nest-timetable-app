import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { Timetable } from './schemas/timetable.schema';

@Controller('timetables')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Get('getall')
  async findAll(): Promise<Timetable[]> {
    return await this.timetableService.findAll();
  }

  @Get('getbyid:id')
  async findOne(@Param('_id') id: string): Promise<Timetable> {
    return await this.timetableService.findOne(id);
  }

  @Post('create')
  async create(@Body() post: Timetable): Promise<Timetable> {
    return await this.timetableService.create(post);
  }

  @Put('edit:id')
  async update(@Param('_id') id: string, @Body() post: Timetable): Promise<Timetable> {
    return await this.timetableService.update(id, post);
  }

  @Delete('del:id')
  async delete(@Param('_id') id: string): Promise<Timetable> {
    return await this.timetableService.delete(id);
  }
}