import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaskModule } from 'src/task/task.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { TimetableModule } from './timetable/timetable.module';

@Module({

imports: [DatabaseModule, AuthModule,TaskModule,UserModule, TimetableModule],
})
export class AppModule {}
