import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.scss',
})
export class ToDoCardComponent {
  @Input() name = '';
}
