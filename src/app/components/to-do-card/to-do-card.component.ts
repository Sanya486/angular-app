import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoServiceService } from 'app/services/todo-service.service';
import { Store } from '@ngrx/store';
import {
  addDoneTodo,
  deleteTodo,
  moveTodoToDone,
} from 'app/store/todos.actions';
import { ITodo } from 'app/interfaces/todo';

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.scss',
})
export class ToDoCardComponent {
  constructor(private store: Store) {}
  @Input() todo: ITodo;
  @Input() index: number;

  handleDeleteBtn(id: string) {
    this.store.dispatch(deleteTodo({ id }));
  }

  handleDoneBtn(title: string, id: string) {
    this.store.dispatch(addDoneTodo({ todo: title }));
    this.store.dispatch(deleteTodo({ id }));
  }
}
