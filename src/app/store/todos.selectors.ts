import { createSelector } from '@ngrx/store';
import { InitialStore } from 'app/interfaces/initialStore';

const selectTodos = (state: { todos: InitialStore }) => state.todos;

export const selectUndoneTodos = createSelector(
  selectTodos,
  (state: InitialStore) => state.undone_todos
);

export const selectDoneTodos = createSelector(
  selectTodos,
  (state: InitialStore) => state.done_todos
);
