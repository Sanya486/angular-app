import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RandomActivity } from 'app/interfaces/random-activity';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from 'app/services/todo-service.service';
import { Store } from '@ngrx/store';
import { addNewTodo } from 'app/store/todos.actions';

@Component({
  selector: 'app-random-activity-box',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './random-activity-box.component.html',
  styleUrl: './random-activity-box.component.scss',
})
export class RandomActivityBoxComponent {
  constructor(private store: Store) {}
  @Input() activity!: RandomActivity;

  handleAddBtn(activity: string) {
    this.store.dispatch(addNewTodo({ todo: activity }));
  }
}
