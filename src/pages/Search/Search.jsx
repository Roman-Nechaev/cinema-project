import { Formik } from 'formik';
import {
  Button,
  ContainerForm,
  FormsSt,
  Input,
  Wrapper,
} from './Search.styled';

import { MoviesSearchList } from '../../components/MoviesSearchList/MoviesSearchList';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../redux/movieSearch/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Pagination from 'rc-pagination';
import { WrapperPagination } from '../../components/MoviesSearchList/MoviesSearchList.styled';
import { selectMoviesTotal } from '../../redux/movieSearch/selector';

export const Search = () => {
  const dispatch = useDispatch();
  const totalFilms = useSelector(selectMoviesTotal);
  console.log(totalFilms);
  const handleSubmit = ({ values }, actions) => {
    if (values.trim() === '') {
      return;
    }
    setSearchParams({ query: values, page: 1 });

    actions.setSubmitting(false);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const queryMovies = searchParams.get('query') ?? '';
  const pageMovies = searchParams.get('page') ?? '';

  const onChange = page => {
    setSearchParams({ query: queryMovies, page: page });
  };

  useEffect(() => {
    if (!queryMovies && !pageMovies) {
      setSearchParams();
      return;
    }
    console.log(queryMovies);
    dispatch(fetchSearchMovie({ search: queryMovies, page: pageMovies }));
  }, [dispatch, pageMovies, queryMovies, setSearchParams]);

  return (
    <Wrapper>
      <ContainerForm>
        <Formik initialValues={{ values: queryMovies }} onSubmit={handleSubmit}>
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
      <MoviesSearchList />

      {totalFilms && (
        <WrapperPagination>
          <Pagination
            onChange={onChange}
            current={pageMovies}
            total={Math.round(totalFilms / 2)}
          />
        </WrapperPagination>
      )}
    </Wrapper>
  );
};
