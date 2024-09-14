import React from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';

import 'react-quill/dist/quill.snow.css';
import Block from '../common/Block';
import { useMemoSlice } from 'store/memo';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedMemoListSelector } from 'store/memo/selectors';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60);
  padding: 0 0 0 10px;
  overflow: auto;

  & * {
    font-family: 'Noto Sans KR' !important;
    letter-spacing: -0.2px;
  }

  & .ql-container.ql-snow {
    border: 0 !important;
  }
`;

const MemoDate = styled.div`
  font-size: 0.85em;
  letter-spacing: -0.3px;
  color: #8b8b8b;
  text-align: center;
`;

export default function MemoEditor() {
  const { MemoActions } = useMemoSlice();
  const dispatch = useDispatch();

  const selectedMemo = useSelector(SelectedMemoListSelector);

  const EditorRef = React.useRef<ReactQuill>();

  React.useEffect(() => {
    setValue(selectedMemo !== undefined ? selectedMemo.content : '');
  }, [selectedMemo]);

  const [value, setValue] = React.useState('');

  return (
    <Box>
      <Block marginTop="5px" />
      <MemoDate>
        {new Date(selectedMemo?.created_at ?? '').toLocaleString('ko')}
      </MemoDate>

      <ReactQuill
        theme="snow"
        value={value}
        ref={element => {
          if (element !== null) {
            EditorRef.current = element;
          }
        }}
        onChange={content => {
          setValue(content);
          dispatch(
            MemoActions.saveMemo({
              content: content,
              preview:
                EditorRef.current !== undefined
                  ? EditorRef.current.getEditor().getText()
                  : '',
            }),
          );
        }}
        style={{ height: '100vh', border: 'none' }}
        modules={{
          toolbar: {
            container: '#toolbar',
          },
        }}
      />
    </Box>
  );
}
