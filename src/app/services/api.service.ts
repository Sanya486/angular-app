import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://6595665304335332df82a609.mockapi.io/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllDoneTodo() {
    return this.http.get(`${URL}done_todo`);
  }

  getAllUndoneTodo() {
    return this.http.get(`${URL}undone_todo`);
  }

  addUndoneTodo(title: string) {
    return this.http.post(`${URL}undone_todo`, { title });
  }

  addDoneTodo(title: string) {
    return this.http.post(`${URL}done_todo`, { title });
  }

  deleteUndoneTodo(id: string) {
    return this.http.delete(`${URL}undone_todo/${id}`);
  }
}
