import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoCardComponent } from '../to-do-card/to-do-card.component';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { InitialStore } from 'app/interfaces/initialStore';
import { selectUndoneTodos } from 'app/store/todos.selectors';
import { ITodo } from 'app/interfaces/todo';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoCardComponent, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  list: ITodo[];
  constructor(private store: Store<{ todos: InitialStore }>) {
    this.store
      .select(selectUndoneTodos)
      .subscribe((next) => (this.list = next));
  }
}
