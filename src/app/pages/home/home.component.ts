import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToDoListComponent } from 'app/components/to-do-list/to-do-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddToDoComponent } from 'app/components/add-to-do/add-to-do.component';
import { TodoServiceService } from 'app/services/todo-service.service';
import { DoneToDoListComponent } from 'app/components/done-to-do-list/done-to-do-list.component';
import { StatisticComponent } from 'app/components/statistic/statistic.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSlideToggleModule,
    ToDoListComponent,
    MatDividerModule,
    AddToDoComponent,
    DoneToDoListComponent,
    StatisticComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public todos: string[];
  public favoriteTodos: string[];
  constructor(private todoService: TodoServiceService) {
    this.todos = this.todoService.getTodos();
    this.favoriteTodos = this.todoService.getFavoriteTodos();
  }

  addAction(value: string) {
    this.todos.push(value);
  }
}
