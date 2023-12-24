import { Module } from '@nestjs/common';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TimetableSchema } from './schemas/timetable.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Timetable', schema: TimetableSchema }])],
  controllers: [TimetableController],
  providers: [TimetableService],
  exports: [TimetableService]
})
export class TimetableModule {}
