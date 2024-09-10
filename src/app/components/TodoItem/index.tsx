import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';
import CircleButton from '../Button/CircleButton';
import TodoInput from '../TodoInput';

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 10 10 10 10;
  padding: 10px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }
  &:hover {
    & > .delete-button {
      display: flex;
    }
    & > .delete-button:hover > svg {
      fill: #000000;
    }
  }
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

export default function TodoItem({
  todo,
  onToggle,
}: {
  todo: ITodoItem;
  onToggle: (id: string) => void;
}) {
  return (
    <Box>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={todo.completed} onClick={() => onToggle(todo.id)} />
        <Block marginLeft="10px" />
        {todo.edition ? (
          <TodoInput isEditing={todo.edition} />
        ) : (
          <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
        )}
      </div>
      <CircleButton
        className="delete-button"
        onClick={() => {}}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#5f6368"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        )}
      />
    </Box>
  );
}
