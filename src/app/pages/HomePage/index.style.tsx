import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Box = styled.div`
  width: 400px;
  height: 400px;
  background-color: cadetblue;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0.18, 1);
  border-radius: 2%;
  overflow-y: auto;
  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;
  }
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

export const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
  color: #f6f6f6;
  background-color: darkslategrey;
`;

export const TodoList = styled.div`
  height: 270px;
  overflow-y: auto;
  @media (max-width: 425px) {
    height: calc(100vh - 128px);
  }
`;
