import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = await this.taskModel.create(createTaskDto);
    return createdTask;
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskModel.findById({ _id: id });
    if (!task) throw new NotFoundException(`This task don't exist`);
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const updatedTask = await this.taskModel.findByIdAndUpdate(
      { _id: id },
      updateTaskDto,
      { new: true },
    );
    if (!updatedTask) throw new NotFoundException(`This task don't exist`);
    return updatedTask;
  }

  async remove(id: string) {
    const deletedTask = await this.taskModel.findByIdAndRemove({ _id: id });
    if (!deletedTask) throw new NotFoundException(`This task don't exist`);
    return 'Task deleted';
  }
}
