import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum FilterType {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}

export interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  filter: FilterType;
}

const initialState: ITodoState = {
  todos: [],
  filter: FilterType.ALL
};

export const todoSlice = createSlice({
  name: '@@todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    changeStatus: (state, action: PayloadAction<{id: string, status: boolean}>) => {
      state.todos.find(todo => todo.id === action.payload.id)!.completed = !action.payload.status;
    },
    showFilterTodo: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
    clearTodo: (): ITodoState => {
      return initialState;
    },
  }
});

export const { addTask, changeStatus, showFilterTodo, clearTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;
export const selectFilter = (state: RootState) => state.todo.filter;

export default todoSlice.reducer;
