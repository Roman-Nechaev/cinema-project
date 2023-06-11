import { useSelector } from 'react-redux';

import { Wrapper, WrapperList } from './MoviesSearchList.styled';

import '../../assets/index.less';
import { selectMoviesSearch } from '../../redux/movieSearch/selector';
import { CommonMovieItem } from '../CommonMovieList/CommonMovieItem';

export const MoviesSearchList = () => {
  const searchFilms = useSelector(selectMoviesSearch);

  return (
    <Wrapper>
      <WrapperList>
        {searchFilms &&
          searchFilms.map(item => <CommonMovieItem key={item.id} {...item} />)}
      </WrapperList>
    </Wrapper>
  );
};
