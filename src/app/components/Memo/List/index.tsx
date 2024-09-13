import React from 'react';
import styled from 'styled-components';
import MemoItem from '../Item';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
    transition: 0.2s;

    &:hover {
      margin-left: 0;
    }
  }
`;

export default function MemoList() {
  return (
    <List>
      <MemoItem
        id="1"
        created_at={new Date().toString()}
        selected={false}
        preview="오늘의 메모입니다.nmnmm,m,m,m,m preview12312312 3123123123123"
      />
      <MemoItem
        id="1"
        created_at={new Date().toString()}
        selected={true}
        preview="오늘의 메모입니다.nmnmm,m,m,m,m preview12312312 3123123123123"
      />
      <MemoItem
        id="1"
        created_at={new Date().toString()}
        selected={false}
        preview="오늘의 메모입니다.nmnmm,m,m,m,m preview12312312 3123123123123"
      />
    </List>
  );
}
