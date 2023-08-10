import { useDispatch, useSelector } from 'react-redux';
import {
  selectDiscoverMovie,
  selectDiscoverMovieIsLoading,
} from '../../redux/DiscoverMovie/selector';
import { useEffect } from 'react';
import { fetchDiscoverMovie } from '../../redux/DiscoverMovie/operations';
import { CommonHomeItem } from '../CommonHomeList/CommonHomeItem';

import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { Wrapper, WrapperList, LinkMore } from './HomeList.styled';

export const HomeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDiscoverMovie());
  }, [dispatch]);

  const discoverMovie = useSelector(selectDiscoverMovie);
  const IsLoading = useSelector(selectDiscoverMovieIsLoading);
  return (
    <Wrapper>
      <h2>Popular on Found Films </h2>
      {IsLoading ? (
        <LoaderSpinner />
      ) : (
        <WrapperList>
          {discoverMovie.map(item => (
            <CommonHomeItem key={item.id} {...item} />
          ))}
          <LinkMore to={'/popular'}>See more...</LinkMore>
        </WrapperList>
      )}
    </Wrapper>
  );
};
