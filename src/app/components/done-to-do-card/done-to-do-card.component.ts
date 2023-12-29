import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-done-to-do-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './done-to-do-card.component.html',
  styleUrl: './done-to-do-card.component.scss',
})
export class DoneToDoCardComponent {
  @Input() name = '';
}
