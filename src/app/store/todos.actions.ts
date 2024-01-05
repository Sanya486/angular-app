import { createAction, props } from '@ngrx/store';
import { ITodo } from 'app/interfaces/todo';

export enum StoreActions {
  GET_ALL_UNDONE_TODOS = '[To-do] Get all undone to-dos',
  GET_ALL_DONE_TODOS = '[To-do] Get all done to-dos',
  ADD_TODO_FROM_LS = '[To-do] Add to-do from local storage',
  ADD_DONE_TODO = '[To-do] Add done to-do',
  ADD_UNDONE_TODO = '[To-do] Add undone to-do',
  MOVE_TODO_TO_DONE = '[To-do] Move to-do to done section',
  DELETE_UNDONE_TODO = '[To-do] Delete undone to-do',
  DELETE_ALL_UNDONE_TODO = '[To-do] Delete all undone todos',
  DELETE_ALL_DONE_TODO = '[To-do] Delete all done todos',
  SUCCESS_GET_ALL_UNDONE_TODOS = '[To-do] Successfully get all undone to-dos',
  SUCCESS_GET_ALL_DONE_TODOS = '[To-do] Successfully get all done to-dos',
  SUCCESS_ADD_UNDONE_TODOS = '[To-do] Successfully add undone to-dos',
  SUCCESS_ADD_DONE_TODOS = '[To-do] Successfully add done to-dos',
  SUCCESS_DELETE_UNDONE_TODOS = '[To-do] Successfully delete undone to-dos',
  SUCCESS_DELETE_ALL_UNDONE_TODOS = '[To-do] Successfuly delete all undone todos',
  SUCCESS_DELETE_ALL_DONE_TODOS = '[To-do] Successfuly delete all done todos',
}

export const addTodosFromLS = createAction(
  StoreActions.ADD_TODO_FROM_LS,
  props<{ DoneTodos: string[]; UndoneTodos: string[] }>()
);

export const moveTodoToDone = createAction(
  StoreActions.MOVE_TODO_TO_DONE,
  props<{ todo: string; id: string }>()
);

// Api Actions ===============================

export const getAllUndoneTodos = createAction(
  StoreActions.GET_ALL_UNDONE_TODOS
);

export const getAllDoneTodos = createAction(StoreActions.GET_ALL_DONE_TODOS);

export const getAllUndoneTodos_success = createAction(
  StoreActions.SUCCESS_GET_ALL_UNDONE_TODOS,
  props<{ payload: ITodo[] }>()
);

export const getAllDoneTodos_success = createAction(
  StoreActions.SUCCESS_GET_ALL_DONE_TODOS,
  props<{ payload: ITodo[] }>()
);

export const addUndoneTodo = createAction(
  StoreActions.ADD_UNDONE_TODO,
  props<{ todo: string }>()
);

export const addUndoneTodo_success = createAction(
  StoreActions.SUCCESS_ADD_UNDONE_TODOS,
  props<{ payload: ITodo }>()
);

export const addDoneTodo = createAction(
  StoreActions.ADD_DONE_TODO,
  props<{ todo: string }>()
);

export const addDoneTodo_success = createAction(
  StoreActions.SUCCESS_ADD_DONE_TODOS,
  props<{ payload: ITodo }>()
);

export const deleteTodo = createAction(
  StoreActions.DELETE_UNDONE_TODO,
  props<{ id: string }>()
);

export const deleteTodo_success = createAction(
  StoreActions.SUCCESS_DELETE_UNDONE_TODOS,
  props<{ payload: ITodo }>()
);

export const deleteAllUndone = createAction(
  StoreActions.DELETE_ALL_UNDONE_TODO
);

export const deleteAllUndone_success = createAction(
  StoreActions.SUCCESS_DELETE_ALL_UNDONE_TODOS
);

export const deleteAllDone = createAction(StoreActions.DELETE_ALL_DONE_TODO);

export const deleteAllDone_success = createAction(
  StoreActions.SUCCESS_DELETE_ALL_DONE_TODOS
);
