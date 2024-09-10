import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';
import { useTodoSlice } from 'store/todo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoListSelector } from 'store/todo/selectors';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Box = styled.div`
  width: 400px;
  height: 400px;
  background-color: cadetblue;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0.18, 1);
  border-radius: 2%;
  overflow-y: auto;
  & {
    overflow-y: auto; /* 세로 스크롤 추가 */
  }

  /* 스크롤바의 전체 배경 */
  &::-webkit-scrollbar {
    width: 7px; /* 스크롤바의 너비 */
  }

  /* 스크롤바의 트랙 (배경) */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* 배경색 */
    border-radius: 10px; /* 모서리 둥글게 */
  }

  /* 스크롤바의 핸들 */
  &::-webkit-scrollbar-thumb {
    background: #888; /* 핸들 색상 */
    border-radius: 10px; /* 모서리 둥글게 */
  }

  /* 핸들에 마우스를 올렸을 때 색상 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 호버 색상 */
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
  color: #f6f6f6;
  background-color: darkslategrey;
`;

const TodoList = styled.div``;

export function HomePage() {
  const { TodoActions } = useTodoSlice();
  const todoList = useSelector(TodoListSelector);
  const dispatch = useDispatch();

  const handleToggle = (id: string) => {
    // setTodoList(prevTodos =>
    //   prevTodos.map(todo =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    //   ),
    // );
  };

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할 일</Title>
          <TodoInput
            addTodo={(content: string) =>
              dispatch(TodoActions.addTodo(content))
            }
          />
          <TodoList>
            {todoList.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                checkTodo={() =>
                  dispatch(TodoActions.checkTodo({ id: todo.id }))
                }
                editModeTodo={() =>
                  dispatch(TodoActions.editModeTodo({ id: todo.id }))
                }
                editTodo={(content: string) =>
                  dispatch(
                    TodoActions.editTodo({
                      id: todo.id,
                      content: content,
                    }),
                  )
                }
                deleteTodo={() =>
                  dispatch(TodoActions.deleteTodo({ id: todo.id }))
                }
              />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
