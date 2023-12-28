import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoCardComponent } from '../to-do-card/to-do-card.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoCardComponent, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  @Input() list: string[];
}
