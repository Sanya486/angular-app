import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addNewTodo } from 'app/store/todos.actions';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.scss',
})
export class AddToDoComponent {
  constructor(private store: Store) {}
  addToDoForm = new FormGroup({
    addToDo: new FormControl('', [Validators.minLength(2)]),
  });

  get addToDo() {
    return this.addToDoForm.get('addToDo');
  }
  submitApplication() {
    this.store.dispatch(
      addNewTodo({ todo: this.addToDoForm.value.addToDo as string })
    );
  }
}
