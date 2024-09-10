import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './types';
import { useInjectReducer } from 'utils/redux-injectors';
import { loadTodoData, saveTodoData } from 'store/localStorage';

export const initialState: TodoState = {
  todolist: loadTodoData(),
};

const slice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: {
      // 2. 행위 정의: 데이터 상태 저장
      reducer: (state, action: PayloadAction<ITodoItem>) => {
        state.todolist.push(action.payload);
        saveTodoData(state.todolist);
      },
      // 1. 데이터 정의: 내용을 받아 ITodoItem으로 만들기
      prepare: (content: string) => {
        const id = nanoid();
        return {
          // return 데이터를 reducer로 전송
          payload: {
            id: id,
            content: content,
            completed: false,
            edition: false,
          },
        };
      },
    },
    checkTodo(state, action: PayloadAction<{ id: string }>): void {
      const id = action.payload.id;
      const todo = state.todolist.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      saveTodoData(state.todolist);
    },
    editModeTodo(state, action: PayloadAction<{ id: string }>): void {
      const id = action.payload.id;

      for (const todo of state.todolist) {
        if (todo.id === id) continue;
        if (todo.edition === true) todo.edition = false;
      }

      const todo = state.todolist.find(todo => todo.id === id);
      if (todo) {
        todo.edition = !todo.edition;
      }
    },
    editTodo(state, action: PayloadAction<{ id: string; content: string }>) {
      const id = action.payload.id;
      const content = action.payload.content;

      const todo = state.todolist.find(todo => todo.id === id);
      if (todo) {
        todo.content = content;
      }
      saveTodoData(state.todolist);
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const filteredTodos = state.todolist.filter(todo => todo.id !== id);
      state.todolist = filteredTodos;
      saveTodoData(state.todolist);
    },
  },
});

export const { actions: TodoActions } = slice;
export const useTodoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { TodoActions: slice.actions };
};
