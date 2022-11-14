import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Nicolas:nicolas@learning.pkmqs.mongodb.net/nativo',
    ),
    TaskModule,
  ],
})
export class AppModule {}
