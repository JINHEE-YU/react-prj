import MemoEditor from 'app/components/Memo/Editor';
import MemoList from 'app/components/Memo/List';
import MemoToolBar from 'app/components/Memo/Toolbar';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export function MemoPage() {
  return (
    <>
      <div>
        <MemoToolBar />
        <FlexRow>
          <MemoList />
          <MemoEditor />
        </FlexRow>
      </div>
    </>
  );
}
