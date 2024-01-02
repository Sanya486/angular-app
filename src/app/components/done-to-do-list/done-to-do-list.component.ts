import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DoneToDoCardComponent } from '../done-to-do-card/done-to-do-card.component';
import { InitialStore } from 'app/interfaces/initialStore';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDoneTodos } from 'app/store/todos.selectors';

@Component({
  selector: 'app-done-to-do-list',
  standalone: true,
  imports: [CommonModule, DoneToDoCardComponent],
  templateUrl: './done-to-do-list.component.html',
  styleUrl: './done-to-do-list.component.scss',
})
export class DoneToDoListComponent {
  list: string[];
  constructor(private store: Store<{ todos: InitialStore }>) {
    this.store.select(selectDoneTodos).subscribe((next) => (this.list = next));
  }
}
