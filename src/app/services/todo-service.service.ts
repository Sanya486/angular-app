import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private todos: string[] = ['Running', 'Cooking', 'Jumping'];
  private favoriteTodos: string[] = ['Flying'];

  getTodos() {
    return this.todos;
  }

  getFavoriteTodos() {
    return this.favoriteTodos;
  }

  addTodo(todo: string) {
    this.todos.unshift(todo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  addToFavorite(name: string) {
    this.favoriteTodos.push(name);
  }
}
