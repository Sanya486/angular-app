import { createReducer, on } from '@ngrx/store';

import {
  addUndoneTodo_success,
  deleteTodo_success,
  getAllDoneTodos_success,
  getAllUndoneTodos_success,
  addDoneTodo_success,
  deleteAllUndone_success,
  deleteAllDone_success,
} from './todos.actions';

import { ITodo } from 'app/interfaces/todo';
import { InitialStore } from 'app/interfaces/initialStore';

const initialState: InitialStore = {
  done_todos: [],
  undone_todos: [],
};

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
      done_todos: [...state.done_todos, payload],
    };
  }),
  on(deleteAllUndone_success, (state) => {
    return {
      ...state,
      undone_todos: [],
    };
  }),
  on(deleteAllDone_success, (state) => {
    return {
      ...state,
      done_todos: [],
    };
  })
);
