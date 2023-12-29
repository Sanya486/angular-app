import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItemFromLS() {
    return JSON.parse(localStorage.getItem('todos') as string) || [];
  }

  setItemsToLS(todos: string[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getFavoriteItemsFromLS() {
    return JSON.parse(localStorage.getItem('favoriteTodos') as string) || [];
  }

  setFavoriteItemsToLS(todos: string[]) {
    localStorage.setItem('favoriteTodos', JSON.stringify(todos));
  }
}
