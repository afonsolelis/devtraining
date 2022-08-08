import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [],
  controllers: [AppController, CoursesController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
