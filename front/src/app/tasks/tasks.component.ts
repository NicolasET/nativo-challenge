import { Component, OnInit } from '@angular/core';
import { Todo } from '../services/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  default: Todo = {
    title: '',
    description: '',
    creator: '',
    status: false,
  };
  constructor(protected readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTask();
  }

  async deleteTask(id: string) {
    await this.todoService.deleteTask(id);
    this.ngOnInit();
  }
}
