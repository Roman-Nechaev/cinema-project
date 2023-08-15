import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import Pagination from 'rc-pagination';
import { useTranslation } from 'react-i18next';

import { MoviesSearchList } from '../../components/MoviesSearchList/MoviesSearchList';
import { fetchSearchMovie } from '../../redux/movieSearch/operations';

import { WrapperPagination } from '../../components/MoviesSearchList/MoviesSearchList.styled';
import {
  selectMoviesTotal,
  selectSearchIsLoading,
} from '../../redux/movieSearch/selector';

import { scrollToTop } from '../../utils';
import { LoaderSpinner } from '../../components/LoaderSpinner/LoaderSpinner';

import {
  Button,
  ContainerForm,
  FormsSt,
  Input,
  Wrapper,
  SearchIcon,
} from './Search.styled';

export const Search = () => {
  const dispatch = useDispatch();
  const totalFilms = useSelector(selectMoviesTotal);
  const isLoading = useSelector(selectSearchIsLoading);
  const { t } = useTranslation();

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

    scrollToTop();

    const lang = t('language');

    dispatch(fetchSearchMovie({ search: queryMovies, page: pageMovies, lang }));
  }, [dispatch, pageMovies, queryMovies, setSearchParams, t]);

  return (
    <Wrapper>
      <ContainerForm>
        <Formik initialValues={{ values: queryMovies }} onSubmit={handleSubmit}>
          <FormsSt>
            <Button type="submit">
              <SearchIcon />
            </Button>
            <Input
              name="values"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder={t('Find')}
            />
          </FormsSt>
        </Formik>
      </ContainerForm>

      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <MoviesSearchList />
          {!!totalFilms && (
            <WrapperPagination>
              <Pagination
                onChange={onChange}
                current={+pageMovies}
                total={Math.round(totalFilms / 2)}
              />
            </WrapperPagination>
          )}
        </>
      )}
    </Wrapper>
  );
};
