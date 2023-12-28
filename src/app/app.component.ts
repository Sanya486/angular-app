import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';

const toDoList = ["Running", "Cooking", "Jumping"]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatSlideToggleModule,
    ToolbarComponent,
    ToDoListComponent,
    MatDividerModule,
    AddToDoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
  list = toDoList;
}
