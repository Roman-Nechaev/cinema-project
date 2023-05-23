import { useEffect, useState } from 'react';
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

import { selectFilmsIdValue } from '../../redux/savedFilmsId/savedFilmsIdSlice';
import { MoviesPopularItem } from './MoviesPopularItem/MoviesPopularItem';

export const MoviesPopularList = () => {
  const dispatch = useDispatch();
  const moviesPopular = useSelector(selectMovies);
  const savedFilmsId = useSelector(selectFilmsIdValue);

  const [current, setCurrent] = useState(1);

  const onChange = page => {
    setCurrent(page);
  };
  console.log(savedFilmsId);
  useEffect(() => {
    dispatch(fetchPopMovie(current));
  }, [current, dispatch, moviesPopular.id, savedFilmsId]);

  return (
    <Wrapper>
      <WrapperList>
        {moviesPopular.map(item => (
          <MoviesPopularItem key={item.id} {...item} />
        ))}
      </WrapperList>
      <WrapperPagination>
        <Pagination onChange={onChange} current={current} total={500} />
      </WrapperPagination>
    </Wrapper>
  );
};
