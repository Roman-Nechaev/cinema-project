import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPopMovie } from '../../redux/operations';
import { selectMovies } from '../../redux/selector';

import {
  Wrapper,
  WrapperList,
  WrapperPagination,
} from './MoviesPopularList.styled';

import '../../assets/index.less';
import { CommonMovieItem } from '../CommonMovieList/CommonMovieItem';

export const MoviesPopularList = () => {
  const dispatch = useDispatch();
  const moviesPopular = useSelector(selectMovies);

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
    <Wrapper>
      <WrapperList>
        {moviesPopular.map(item => (
          <CommonMovieItem key={item.id} {...item} />
        ))}
      </WrapperList>
      <WrapperPagination>
        <Pagination onChange={onChange} current={pageMovies} total={500} />
      </WrapperPagination>
    </Wrapper>
  );
};
