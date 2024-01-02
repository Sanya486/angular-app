import { InitialStore } from 'app/interfaces/initialStore';
import { LocalStorageService } from 'app/services/local-storage.service';

const ls = new LocalStorageService();

export const initialState: InitialStore = {
  undone_todos: [],
  done_todos: [],
};

export const addTodoFromLSHandler = (
  state: InitialStore,
  { DoneTodos, UndoneTodos }: { DoneTodos: string[]; UndoneTodos: string[] }
) => {
  return {
    ...state,
    undone_todos: UndoneTodos,
    done_todos: DoneTodos,
  };
};

export const addNewTodoHandler = (
  state: InitialStore,
  { todo }: { todo: string }
) => {
  const isTodoExisted = state.undone_todos.find(
    (item) => item.toLowerCase() === todo.toLowerCase()
  );
  if (isTodoExisted) {
    alert('Todo is already exist!');
    return state;
  }
  ls.setItemsToLS([...state.undone_todos, todo]);
  return {
    ...state,
    undone_todos: [...state.undone_todos, todo],
  };
};

export const moveTodoToDoneHandler = (
  state: InitialStore,
  { todo }: { todo: string }
) => {
  const filteredUndoneTodo = state.undone_todos.filter((item) => item !== todo);
  ls.setFavoriteItemsToLS([...state.done_todos, todo]);
  ls.setItemsToLS(filteredUndoneTodo);
  return {
    ...state,
    undone_todos: filteredUndoneTodo,
    done_todos: [...state.done_todos, todo],
  };
};

export const deleteTodoHandler = (
  state: InitialStore,
  { index }: { index: number }
) => {
  const undoneTodo = [...state.undone_todos];
  undoneTodo.splice(index, 1);
  ls.setItemsToLS(undoneTodo);
  return {
    ...state,
    undone_todos: undoneTodo,
  };
};
