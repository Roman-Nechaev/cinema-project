// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Field } from 'formik';
// import { HiOutlineBookmark, HiOutlineBookmarkAlt } from 'react-icons/hi';

export const Wrapper = styled.div`
  padding-top: 80px;
  /* min-height: 500px; */
  /* @media screen and (min-width: 768px) {
    min-height: 800px;
  } */
`;

export const FormsSt = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  /* border-radius: 20px; */
  overflow: hidden;
  margin: 0 auto;

  position: relative;
`;

export const Input = styled(Field)`
  display: inline-block;

  width: 100%;
  font: inherit;
  font-size: 20px;
  /* border: none; */
  outline: none;
  padding-left: 40px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    /* font-size: 18px; */
  }
`;

export const Button = styled.button`
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  /* width: 100%;
  height: 100%; */
  border: 0;
  background-image: url('https://www.svgrepo.com/show/511119/search-magnifying-glass.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  outline: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const ContainerForm = styled.div`
  /* border-bottom: 2px solid rgb(181, 181, 181); */
`;
