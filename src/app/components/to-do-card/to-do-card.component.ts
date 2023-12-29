import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoServiceService } from 'app/services/todo-service.service';

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.scss',
})
export class ToDoCardComponent {
  constructor(private todoService: TodoServiceService) {}
  @Input() name = '';
  @Input() index: number;

  handleDeleteBtn(index: number) {
    this.todoService.deleteTodo(index);
  }

  handleDoneBtn(name: string, index: number) {
    this.todoService.addToFavorite(name);
    this.todoService.deleteTodo(index);
  }
}
