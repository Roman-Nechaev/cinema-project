import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 999;
  border-radius: 5px;

  bottom: 10px;
  padding: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.25);
`;

export const Button = styled.button`
  backdrop-filter: blur(10px);
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  border: none;
  transition: 0.2s;
  background-color: rgba(255, 255, 255, 0.25);
  &:nth-last-child(1) {
    margin: 0;
  }
  :hover,
  :focus {
    background-color: #00b3ff5a;
  }
`;
