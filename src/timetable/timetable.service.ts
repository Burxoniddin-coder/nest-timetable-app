import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Timetable, TimetableDocument } from './schemas/timetable.schema';
import { Model } from 'mongoose';

@Injectable()
export class TimetableService {
  constructor(@InjectModel('timetable') private readonly timetableModel: Model<Timetable>) {}

  async findAll(): Promise<Timetable[]> {
    return await this.timetableModel.find().exec();
  }

  async findOne(id: string): Promise<Timetable> {
    return await this.timetableModel.findById(id).exec();
  }

  async create(timetable: Timetable): Promise<Timetable> {
    const newtimetable = new this.timetableModel(timetable);
    return await newtimetable.save();
  }

  async update(id: string, timetable: Timetable): Promise<Timetable> {
    return await this.timetableModel.findByIdAndUpdate(id, timetable, { new: true });
  }

  async delete(id: string): Promise<Timetable> {
    return await this.timetableModel.findByIdAndRemove(id);
  }
}