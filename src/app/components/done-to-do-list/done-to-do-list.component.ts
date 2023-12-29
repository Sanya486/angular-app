import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DoneToDoCardComponent } from '../done-to-do-card/done-to-do-card.component';

@Component({
  selector: 'app-done-to-do-list',
  standalone: true,
  imports: [CommonModule, DoneToDoCardComponent],
  templateUrl: './done-to-do-list.component.html',
  styleUrl: './done-to-do-list.component.scss',
})
export class DoneToDoListComponent {
  @Input() list: string[];
}
