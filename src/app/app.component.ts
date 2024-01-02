import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { LocalStorageService } from './services/local-storage.service';
import { Store } from '@ngrx/store';
import { InitialStore } from './interfaces/initialStore';
import { addTodosFromLS } from './store/todos.actions';

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
export class AppComponent implements OnInit {
  constructor(
    private localstorageServices: LocalStorageService,
    private store: Store<{ todos: InitialStore }>
  ) {}
  async ngOnInit() {
    const todosLS = await this.localstorageServices.getItemFromLS();
    const donetodosLS =
      await this.localstorageServices.getFavoriteItemsFromLS();
    this.store.dispatch(
      addTodosFromLS({ UndoneTodos: todosLS, DoneTodos: donetodosLS })
    );
  }
}
