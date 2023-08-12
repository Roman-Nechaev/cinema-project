import { useDispatch, useSelector } from 'react-redux';
import {
  selectDiscoverMovie,
  selectDiscoverMovieIsLoading,
} from '../../redux/DiscoverMovie/selector';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchDiscoverMovie } from '../../redux/DiscoverMovie/operations';
import { CommonHomeItem } from '../CommonHomeList/CommonHomeItem';

import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import {
  Wrapper,
  WrapperList,
  LinkMore,
  WrapperArrow,
} from './HomeList.styled';
import './animationArrow.scss';

export const HomeList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const lang = t('language');
    dispatch(fetchDiscoverMovie(lang));
  }, [dispatch, t]);

  const discoverMovie = useSelector(selectDiscoverMovie);
  const IsLoading = useSelector(selectDiscoverMovieIsLoading);
  return (
    <Wrapper>
      <h2> {t('HomeListTitle')} Found Films </h2>
      {IsLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <WrapperList>
            {discoverMovie.map(item => (
              <CommonHomeItem key={item.id} {...item} />
            ))}
            <LinkMore to={'/popular'}>See more...</LinkMore>
          </WrapperList>
          <WrapperArrow>
            <div className="scroll-down">
              <span href="#complements" className="animate"></span>
            </div>
          </WrapperArrow>
        </>
      )}
    </Wrapper>
  );
};
