import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToDoListComponent } from 'app/components/to-do-list/to-do-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddToDoComponent } from 'app/components/add-to-do/add-to-do.component';
import { DoneToDoListComponent } from 'app/components/done-to-do-list/done-to-do-list.component';
import { DeleteBtnBoxComponent } from 'app/components/delete-btn-box/delete-btn-box.component';

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

    DeleteBtnBoxComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
