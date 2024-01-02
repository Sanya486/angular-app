import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoServiceService } from 'app/services/todo-service.service';
import { Store } from '@ngrx/store';
import { deleteTodo, moveTodoToDone } from 'app/store/todos.actions';

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.scss',
})
export class ToDoCardComponent {
  constructor(private store: Store) {}
  @Input() name = '';
  @Input() index: number;

  handleDeleteBtn(index: number) {
    this.store.dispatch(deleteTodo({ index }));
  }

  handleDoneBtn(name: string, index: number) {
    this.store.dispatch(moveTodoToDone({ todo: name }));
  }
}
