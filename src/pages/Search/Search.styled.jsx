import styled from 'styled-components';
import { Form, Field } from 'formik';
import { HiSearch } from 'react-icons/hi';
import { MdSortByAlpha } from 'react-icons/md';

export const Wrapper = styled.div`
  padding: 83px 40px 0 40px;
`;

export const FormsSt = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px;

  overflow: hidden;
  margin: 0 auto;

  position: relative;
`;

export const Input = styled(Field)`
  display: inline-block;

  border-radius: 0px 0px 30px 30px;

  width: 100%;
  /* font: inherit; */
  font-size: 30px;
  border: none;
  outline: none;
  border-bottom: 2px solid #56e6d5;
  background: transparent;
  padding-right: 10px;
  padding-left: 60px;

  color: #b9f8f2;
  ::placeholder {
    /* font: inherit; */
    color: #41616194;

    /* font-size: 18px; */
  }
  :focus {
  }
`;

export const Button = styled.button`
  display: inline-block;
  position: absolute;
  margin-left: 15px;
  width: 40px;
  height: 40px;

  border: none;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  outline: none;
  background-color: transparent;

  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const ButtonSort = styled.button`
  display: inline-block;
  position: absolute;

  right: 20px;

  border: none;
  outline: none;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: transparent;

  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const ContainerForm = styled.div`
  /* border-bottom: 2px solid rgb(181, 181, 181); */
`;

export const SearchIcon = styled(HiSearch)`
  color: #41616194;
  width: 22px;
  height: 22px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.3s;
  :hover {
    color: #b9f8f2;
  }
`;

export const SortIcon = styled(MdSortByAlpha)`
  color: #ffffff;
  width: 22px;
  height: 22px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.3s;
  :hover {
    color: #b9f8f2;
  }
`;
