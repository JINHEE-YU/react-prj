import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

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
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
  color: #f6f6f6;
  background-color: darkslategrey;
`;

const TodoList = styled.div``;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할 일</Title>
          <TodoInput></TodoInput>
          <TodoList>
            <TodoItem
              todo={{
                id: '1',
                completed: false,
                content: '투두입니다 1',
                edition: false,
              }}
            />
            <TodoItem
              todo={{
                id: '2',
                completed: true,
                content: '투두입니다 2',
                edition: false,
              }}
            />
            <TodoItem
              todo={{
                id: '3',
                completed: true,
                content: '투두입니다 3',
                edition: false,
              }}
            />
            <TodoItem
              todo={{
                id: '4',
                completed: false,
                content: '투두입니다 4',
                edition: false,
              }}
            />
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
