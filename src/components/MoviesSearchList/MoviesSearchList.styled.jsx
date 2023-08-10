import styled from 'styled-components';

export const WrapperPagination = styled.div`
  display: flex;
  display: table;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    padding-left: 60px;
  }
`;

export const WrapperList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    max-width: 1200px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;
