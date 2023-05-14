import styled from 'styled-components';

export const WrapperPagination = styled.div`
  display: table;
  margin: 0 auto;
  margin-top: 20px;
`;
export const Wrapper = styled.div``;

export const WrapperList = styled.ul`
  /* display: flex; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  /* border: 1px solid #40ff00; */
  display: flex;
  width: calc(100vw - 42px);
  max-width: calc(100vw - 42px);

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e3e34a;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;

  backdrop-filter: blur(10px);
  cursor: pointer;
`;

export const ItemImg = styled.img`
  min-width: 94px;
  width: 94px;
  height: 141px;
`;
export const Details = styled.div`
  padding: 10px;
  display: flex;
  /* align-content: center; */
  /* align-items: center; */
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size: 1em;
  color: #ffffff;
  /* margin-bottom: 5px; */
`;

export const Date = styled.span`
  font-size: 0.9em;
  color: #989898;
`;
export const Overview = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;

  display: flex;
  align-items: flex-end;
`;
