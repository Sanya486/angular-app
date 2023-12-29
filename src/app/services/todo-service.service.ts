import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private todos: string[] = [];
  private favoriteTodos: string[] = [];

  constructor(private localStorageServeice: LocalStorageService) {
    this.todos = this.localStorageServeice.getItemFromLS();
    this.favoriteTodos = this.localStorageServeice.getFavoriteItemsFromLS();
  }

  getTodos() {
    return this.todos;
  }

  getFavoriteTodos() {
    return this.favoriteTodos;
  }

  addTodo(todo: string) {
    if (this.todos.includes(todo)) {
      return alert("This todo already exists!")
    }
    this.todos.unshift(todo);
    this.localStorageServeice.setItemsToLS(this.todos);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.localStorageServeice.setItemsToLS(this.todos);
  }

  addToFavorite(name: string) {
    this.favoriteTodos.push(name);
    this.localStorageServeice.setFavoriteItemsToLS(this.favoriteTodos);
  }
}
