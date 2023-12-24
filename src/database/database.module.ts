import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                const username = configService.get('MONGODB_USERNAME');
                const password = configService.get('MONGODB_PASSWORD');
                const database = configService.get('MONGODB_DATABASE');

                return {
                    uri: 'mongodb://localhost:27017/nest_project',
                };
            },
        }),
    ],
})
export class DatabaseModule {}
