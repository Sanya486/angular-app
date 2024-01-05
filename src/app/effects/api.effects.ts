import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ApiService } from 'app/services/api.service';
import { StoreActions } from 'app/store/todos.actions';

@Injectable()
export class ApiEffects {
  loadDoneTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.GET_ALL_DONE_TODOS),
      exhaustMap(() =>
        this.apiService.getAllDoneTodo().pipe(
          map((todos) => ({
            type: StoreActions.SUCCESS_GET_ALL_DONE_TODOS,
            payload: todos,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadUndoneTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.GET_ALL_UNDONE_TODOS),
      exhaustMap(() =>
        this.apiService.getAllUndoneTodo().pipe(
          map((todos) => ({
            type: StoreActions.SUCCESS_GET_ALL_UNDONE_TODOS,
            payload: todos,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addNewTodoAPI$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.ADD_UNDONE_TODO),
      exhaustMap(({ todo }) =>
        this.apiService.addUndoneTodo(todo).pipe(
          map((todo) => ({
            type: StoreActions.SUCCESS_ADD_UNDONE_TODOS,
            payload: todo,
          }))
        )
      )
    )
  );

  deleteFromUndone$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.DELETE_UNDONE_TODO),
      exhaustMap(({ id }) =>
        this.apiService.deleteUndoneTodo(id).pipe(
          map((todo) => ({
            type: StoreActions.SUCCESS_DELETE_UNDONE_TODOS,
            payload: todo,
          }))
        )
      )
    )
  );

  addDoneTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.ADD_DONE_TODO),
      exhaustMap(({ todo, id }) =>
        this.apiService.addDoneTodo(todo).pipe(
          map((todo) => ({
            type: StoreActions.SUCCESS_ADD_DONE_TODOS,
            payload: todo,
          }))
        )
      )
    )
  );

  deleteAllUndoneTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.DELETE_ALL_UNDONE_TODO),
      exhaustMap(() =>
        this.apiService
          .deleteAllUndoneTodos()
          .pipe(
            map(() => ({ type: StoreActions.SUCCESS_DELETE_ALL_UNDONE_TODOS }))
          )
      )
    )
  );

  deleteAllDoneTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.DELETE_ALL_DONE_TODO),
      exhaustMap(() =>
        this.apiService
          .deleteAllDoneTodos()
          .pipe(
            map(() => ({ type: StoreActions.SUCCESS_DELETE_ALL_DONE_TODOS }))
          )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
