import { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPopMovie } from '../../redux/operations';
import { selectMovies } from '../../redux/selector';

import checkPoster from '../../utils/checkPoster';
import formattingOverview from '../../utils/formattingOverview';

import {
  Date,
  Details,
  ItemImg,
  LinkSt,
  ListItem,
  Overview,
  Title,
  Wrapper,
  WrapperList,
  WrapperPagination,
} from './MoviesPopularList.styled';
import '../../assets/index.less';
import { useMedia } from 'react-use';
import { useLocation } from 'react-router-dom';

export const MoviesPopularList = () => {
  const isWide = useMedia('(min-width: 768px)');
  const dispatch = useDispatch();
  const moviesPopular = useSelector(selectMovies);
  const location = useLocation();
  const [current, setCurrent] = useState(1);

  const onChange = page => {
    setCurrent(page);
  };

  useEffect(() => {
    console.log(current);
    dispatch(fetchPopMovie(current));
  }, [current, dispatch]);

  return (
    <Wrapper>
      <WrapperList>
        {moviesPopular.map(
          ({ id, title, poster_path, overview, release_date }) => (
            <ListItem key={id}>
              <LinkSt to={`/movies/${id}`} state={{ from: location }}>
                <ItemImg
                  loading="lazy"
                  src={checkPoster(poster_path)}
                  alt={title}
                />
                <Details>
                  <div>
                    <Title>{title}</Title>
                    <Date>{release_date}</Date>
                  </div>
                  {!isWide && (
                    <Overview>{formattingOverview(overview)}</Overview>
                  )}
                </Details>
              </LinkSt>
            </ListItem>
          )
        )}
      </WrapperList>
      <WrapperPagination>
        <Pagination onChange={onChange} current={current} total={500} />
      </WrapperPagination>
    </Wrapper>
  );
};
