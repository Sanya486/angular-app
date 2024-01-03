import { ITodo } from "./todo";

export interface InitialStore {
  done_todos: ITodo[];
  undone_todos: ITodo[];
}