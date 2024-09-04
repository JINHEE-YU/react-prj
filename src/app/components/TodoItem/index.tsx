import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden; // 요소의 콘텐츠가 요소의 박스를 벗어날 경우, 보이지 않도록 숨깁니다
  text-overflow: ellipsis; // 텍스트가 요소의 경계를 넘어갈 경우, 생략 부호(...)로 표시합니다. 이 속성은 overflow가 hidden일 때만 작동
  overflow-wrap: break-word; // 경계를 넘어갈 경우, 단어 중간에서도 줄 바꿈이 가능
  display: -webkit-box; // 요소를 플렉스 박스의 한 형태로 설정
  -webkit-line-clamp: 3; // 표시할 줄 수를 제한. 이후 ...표기
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#5e5e5e' : '#fff')};
`;

export default function TodoItem({ todo }: { todo: IdotoItem }) {
  return (
    <Box>
      <Checkbox checked={todo.completed} />
      <Block marginLeft="10px" />
      <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
    </Box>
  );
}
