import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.scss',
})
export class AddToDoComponent {
  
  handleSubmit = (e: any) => {
    console.log(e);
  };
}
