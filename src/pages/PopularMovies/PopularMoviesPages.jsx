import { useDispatch } from 'react-redux';
import { MoviesPopularList } from '../../components/MoviesPopularList/MoviesPopularList';
import { Container, TitlePage } from './PopularMoviesPages.styled';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { WrapperPagination } from '../../components/MoviesPopularList/MoviesPopularList.styled';
import { fetchPopMovie } from '../../redux/operations';
import { useEffect } from 'react';
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
