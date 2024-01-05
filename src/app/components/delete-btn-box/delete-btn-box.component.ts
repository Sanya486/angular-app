import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { deleteAllDone, deleteAllUndone } from 'app/store/todos.actions';

@Component({
  selector: 'app-delete-btn-box',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-btn-box.component.html',
  styleUrl: './delete-btn-box.component.scss',
})
export class DeleteBtnBoxComponent {
  constructor(private store: Store) {}

  handleClearAllUndone() {
    this.store.dispatch(deleteAllUndone());
  }

  handleClearAllDone() {
    this.store.dispatch(deleteAllDone());
  }
}
