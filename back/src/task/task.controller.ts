import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ParseMongoPipe } from 'src/common/pipes/parse-mongo-pipe';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoPipe) id: string) {
    return this.taskService.findOne(id);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoPipe) id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoPipe) id: string) {
    return this.taskService.remove(id);
  }
}
