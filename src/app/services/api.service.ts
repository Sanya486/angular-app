import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/todos/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllDoneTodo() {
    return this.http.get(`${URL}done_todos`);
  }

  getAllUndoneTodo() {
    return this.http.get(`${URL}undone_todos`);
  }

  addUndoneTodo(title: string) {
    return this.http.post(`${URL}undone_todos`, { title });
  }

  addDoneTodo(title: string) {
    return this.http.post(`${URL}done_todos`, { title });
  }

  deleteUndoneTodo(id: string) {
    return this.http.delete(`${URL}undone_todos/${id}`);
  }

  deleteAllUndoneTodos() {
    return this.http.delete(`${URL}undone_todos`);
  }

  deleteAllDoneTodos() {
    return this.http.delete(`${URL}done_todos`);
  }
}
