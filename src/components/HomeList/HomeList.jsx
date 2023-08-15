import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  selectDiscoverMovie,
  selectDiscoverMovieIsLoading,
} from '../../redux/DiscoverMovie/selector';
import { fetchDiscoverMovie } from '../../redux/DiscoverMovie/operations';
import { CommonHomeItem } from '../CommonHomeList/CommonHomeItem';

import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';

import { Wrapper, WrapperList, LinkMore } from './HomeList.styled';

export const HomeList = () => {
  const [state, setState] = useState(0);
  const IsLoading = useSelector(selectDiscoverMovieIsLoading);
  const discoverMovie = useSelector(selectDiscoverMovie);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const lang = t('language');
    dispatch(fetchDiscoverMovie(lang));
  }, [dispatch, t]);

  const scrollItems = useCallback(node => {
    if (!node) return;
    setState(node.currentTarget.scrollLeft);
  }, []);

  return (
    <Wrapper>
      <h2> {t('HomeListTitle')} Found Films </h2>
      {IsLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <WrapperList onScroll={scrollItems} props={state}>
            {discoverMovie.map(item => (
              <CommonHomeItem key={item.id} {...item} />
            ))}

            <LinkMore to={'/popular'}>See more...</LinkMore>
          </WrapperList>
        </>
      )}
    </Wrapper>
  );
};
