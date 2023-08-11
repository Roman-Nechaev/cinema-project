import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { useTranslation } from 'react-i18next';

import { MoviesPopularList } from '../../components/MoviesPopularList/MoviesPopularList';
import { WrapperPagination } from '../../components/MoviesPopularList/MoviesPopularList.styled';
import { fetchPopMovie } from '../../redux/popularMovie/operations';

import { Container, TitlePage } from './PopularMoviesPages.styled';
import scrollToTop from '../../utils/scrollToTop';
import { selectMoviesIsLoading } from '../../redux/popularMovie/selector';
import { LoaderSpinner } from '../../components/LoaderSpinner/LoaderSpinner';

export const PopularMoviesPages = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageMovies = searchParams.get('page');
  const isLoading = useSelector(selectMoviesIsLoading);

  const onChange = page => {
    setSearchParams({ page });
  };

  useEffect(() => {
    if (!pageMovies) {
      setSearchParams({ page: 1 });
    }
    scrollToTop();
    const lang = t('language');

    dispatch(fetchPopMovie({ pageMovies, lang }));
  }, [dispatch, pageMovies, setSearchParams, t]);

  return (
    <Container>
      <TitlePage>{t('PopularMovies')}</TitlePage>
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <MoviesPopularList />
          <WrapperPagination>
            <Pagination
              onChange={onChange}
              current={+pageMovies}
              total={2500}
            />
          </WrapperPagination>
        </>
      )}
    </Container>
  );
};
