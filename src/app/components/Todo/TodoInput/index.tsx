import React, { useLayoutEffect, useRef } from 'react';
import { Box, Input } from './index.style';
export default function TodoInput({
  addTodo,
  isEditing, // true:수정용/false:추가용
  editContent, // 기존 content 내용 임시 저장
  editTodo,
}: {
  addTodo?: (content: string) => void;
  isEditing?: boolean;
  editContent?: string;
  editTodo?: (content: string) => void;
}) {
  // 포커스 설정
  const inputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });

  const [content, setContent] = React.useState<string>(editContent ?? '');

  return (
    <Box isEditing={isEditing}>
      <Input
        ref={inputRef}
        placeholder="할일을 입력해 주세요."
        value={content}
        onBlur={e => {
          if (e.currentTarget === e.target) {
            editTodo && editTodo(e.target.value);
          }
        }}
        onChange={e => setContent(e.target.value)}
        onKeyDown={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            addTodo && addTodo(content);
            setContent('');
          }
        }}
      />
    </Box>
  );
}
