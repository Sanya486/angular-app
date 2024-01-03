import { createReducer, on } from '@ngrx/store';

import {
  addUndoneTodo,
  addUndoneTodo_success,
  addTodosFromLS,
  deleteTodo,
  deleteTodo_success,
  getAllDoneTodos_success,
  getAllUndoneTodos_success,
  moveTodoToDone,
  addDoneTodo_success,
} from './todos.actions';

import { initialState } from './utils/reducer-handlers';
import { ITodo } from 'app/interfaces/todo';

export const todosReducer = createReducer(
  initialState,
  on(deleteTodo_success, (state, { payload }) => {
    return {
      ...state,
      undone_todos: state.undone_todos.filter(
        (todo: ITodo) => todo.title !== payload.title
      ),
    };
  }),
  on(getAllUndoneTodos_success, (state, { payload }) => {
    return {
      ...state,
      undone_todos: payload.map((todo) => todo),
    };
  }),
  on(getAllDoneTodos_success, (state, { payload }) => {
    return {
      ...state,
      done_todos: payload.map((todo) => todo),
    };
  }),
  on(addUndoneTodo_success, (state, { payload }) => {
    return {
      ...state,
      undone_todos: [...state.undone_todos, payload],
    };
  }),
  on(addDoneTodo_success, (state, { payload }) => {
    return {
      ...state,
      done_todos: [...state.done_todos, payload]
    }
  })
);
