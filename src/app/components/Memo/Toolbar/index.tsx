import React from 'react';
import styled from 'styled-components';
import { TitleText } from '../common/Text';
import SmallButton from '../common/Button/SmallButton';

import { ReactComponent as PostDeleteIcon } from './assets/post_delete.svg';
import { ReactComponent as PostAddIcon } from './assets/post_add.svg';
import { ReactComponent as MakeBoldIcon } from './assets/format_bold.svg';
import { ReactComponent as MakeSizeIcon } from './assets/text_fields.svg';
import { ReactComponent as MakeTodoIcon } from './assets/check_circle.svg';
import { ReactComponent as MakeImageIcon } from './assets/photo_library.svg';
import SearchInput from '../common/SearchInput';
import Block from '../common/Block';

import ReactQuill from 'react-quill';

let icons = ReactQuill.Quill.import('ui/icons');

icons['header'] = <MakeSizeIcon />;
icons['bold'] = <MakeBoldIcon />;
icons['list'] = <MakeTodoIcon />;
icons['image'] = <MakeImageIcon />;

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0 !important;
  border-bottom: 1px solid #e9e9e9 !important;
  padding: 0 !important;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`;

const LeftMenu = styled(Menu)`
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
  }
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function MemoToolBar() {
  return (
    <Box id="toolbar">
      <LeftMenu>
        <TitleText style={{ marginLeft: '5px' }}>U MEMO</TitleText>
        <SmallButton onClick={() => {}} Icon={() => <PostDeleteIcon />} />
      </LeftMenu>
      <RightMenu>
        <SmallButton onClick={() => {}} Icon={() => <PostAddIcon />} />
        <div>
          <SmallButton
            className="ql-header"
            value="1"
            onClick={() => {}}
            Icon={() => <MakeSizeIcon />}
          />
          <Block marginRight="5px" />
          <SmallButton
            className="ql-bold"
            onClick={() => {}}
            Icon={() => <MakeBoldIcon />}
          />
          <Block marginRight="5px" />
          <SmallButton
            className="ql-list"
            value="check"
            onClick={() => {}}
            Icon={() => <MakeTodoIcon />}
          />
        </div>
        <div>
          <SmallButton
            className="ql-image"
            onClick={() => {}}
            Icon={() => <MakeImageIcon />}
          />
          <Block marginRight="5px" />
          <SearchInput />
        </div>
      </RightMenu>
    </Box>
  );
}
