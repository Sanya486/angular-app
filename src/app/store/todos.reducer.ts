import { createReducer, on } from '@ngrx/store';

import {
  addNewTodo,
  addTodosFromLS,
  deleteTodo,
  moveTodoToDone,
} from './todos.actions';

import {
  addNewTodoHandler,
  addTodoFromLSHandler,
  deleteTodoHandler,
  initialState,
  moveTodoToDoneHandler,
} from './utils/reducer-handlers';

export const todosReducer = createReducer(
  initialState,
  on(addTodosFromLS, addTodoFromLSHandler),
  on(addNewTodo, addNewTodoHandler),
  on(moveTodoToDone, moveTodoToDoneHandler),
  on(deleteTodo, deleteTodoHandler)
);
