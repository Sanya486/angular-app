import { createAction, props } from '@ngrx/store';

export const addTodosFromLS = createAction(
  '[To-do] Add to-do from local storage',
  props<{ DoneTodos: string[]; UndoneTodos: string[] }>()
);

export const addNewTodo = createAction(
  '[To-do] Add new to-do',
  props<{ todo: string }>()
);

export const moveTodoToDone = createAction(
  '[To-do] Move to-do to done section',
  props<{ todo: string }>()
);

export const deleteTodo = createAction(
  '[To-do] Delete to-do',
  props<{ index: number }>()
);
