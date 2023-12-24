import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TimetableDocument = Timetable & Document;

@Schema()
export class Timetable extends Document {
  @Prop({ required: true, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] })
  day: string;

  @Prop({ required: true })
  startTime: string;

  @Prop({ required: true })
  endTime: string;

  @Prop({ required: true, type: [String] })
  subjects: string[];

  @Prop({ required: true, type: [String] })
  teachers: string[];

  @Prop({ required: true })
  classRoom: string;
}

export const TimetableSchema = SchemaFactory.createForClass(Timetable);