import { Formik } from 'formik';
import {
  Button,
  ContainerForm,
  FormsSt,
  Input,
  Wrapper,
} from './Search.styled';
export const Search = () => {
  return (
    <Wrapper>
      <ContainerForm>
        <Formik>
          <FormsSt>
            <Button type="submit"></Button>
            <Input
              name="values"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Find a movie"
            />
          </FormsSt>
        </Formik>
      </ContainerForm>
    </Wrapper>
  );
};
