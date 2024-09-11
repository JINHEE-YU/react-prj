import styled from 'styled-components';

export const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.isEditing ? '0px 0px' : '10px 25px')};
  width: 100%;
  font-size: 1em;
  border-bottom: 1px solid #eee;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
  padding: 5px;
`;
