import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToDoListComponent } from 'app/components/to-do-list/to-do-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddToDoComponent } from 'app/components/add-to-do/add-to-do.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSlideToggleModule,
    ToDoListComponent,
    MatDividerModule,
    AddToDoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  list = ['Running', 'Cooking', 'Jumping'];
  addAction(value: string) {
    this.list.push(value);
  }
}
