import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'rc-pagination';

import { MoviesPopularList } from '../../components/MoviesPopularList/MoviesPopularList';
import { WrapperPagination } from '../../components/MoviesPopularList/MoviesPopularList.styled';
import { fetchPopMovie } from '../../redux/operations';

import { Container, TitlePage } from './PopularMoviesPages.styled';

export const PopularMoviesPages = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const pageMovies = searchParams.get('page') ?? '';

  const onChange = page => {
    setSearchParams({ page: page });
  };

  useEffect(() => {
    if (!pageMovies) {
      setSearchParams({ page: 1 });
    }
    dispatch(fetchPopMovie(pageMovies));
  }, [dispatch, pageMovies, setSearchParams]);

  return (
    <Container>
      <TitlePage>PopularMovies</TitlePage>
      <MoviesPopularList />
      <WrapperPagination>
        <Pagination onChange={onChange} current={pageMovies} total={1500} />
      </WrapperPagination>
    </Container>
  );
};
