import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './types';
import { useInjectReducer } from 'utils/redux-injectors';
import { loadTodoData, saveTodoData } from 'store/localStorage';

export const initialState: TodoState = {
  todoList: loadTodoData(),
};

const slice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: {
      // 2. 행위 정의: 데이터 상태 저장
      reducer: (state, action: PayloadAction<ITodoItem>) => {
        state.todoList.push(action.payload);
        saveTodoData(state.todoList);
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
      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      saveTodoData(state.todoList);
    },
    editModeTodo(state, action: PayloadAction<{ id: string }>): void {
      const id = action.payload.id;

      for (const todo of state.todoList) {
        if (todo.id === id) continue;
        if (todo.edition === true) todo.edition = false;
      }

      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.edition = !todo.edition;
      }
    },
    editTodo(state, action: PayloadAction<{ id: string; content: string }>) {
      const id = action.payload.id;
      const content = action.payload.content;

      const todo = state.todoList.find(todo => todo.id === id);
      if (todo) {
        todo.content = content;
      }
      saveTodoData(state.todoList);
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      const filteredTodos = state.todoList.filter(todo => todo.id !== id);
      state.todoList = filteredTodos;
      saveTodoData(state.todoList);
    },
  },
});

export const { actions: TodoActions } = slice;
export const useTodoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { TodoActions: slice.actions };
};
