import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  @Output() newAction = new EventEmitter<string>();
  addToDoForm = new FormGroup({
    addToDo: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  get addToDo() {
    return this.addToDoForm.get('addToDo');
  }
  submitApplication() {
    this.newAction.emit(this.addToDoForm.value.addToDo as string);
  }
}
