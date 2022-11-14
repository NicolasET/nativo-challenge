import { Injectable } from '@angular/core';
import { Todo } from './todo';

const baseURL = 'http://localhost:3000/api/v1/task/';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  todo: Todo[] = [];
  async getTask() {
    return fetch(baseURL)
      .then((res) => res.json())
      .then((res) => (this.todo = res));
  }

  async createTask(task: Todo) {
    fetch('baseURL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }

  async updateTask(id: string, task: Todo) {
    return fetch(baseURL + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }

  async deleteTask(id: string) {
    await fetch(baseURL + id, { method: 'DELETE' });
  }
}
