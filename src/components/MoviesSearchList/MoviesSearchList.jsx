import { useSelector } from 'react-redux';

import { selectMoviesSearch } from '../../redux/movieSearch/selector';
import { CommonMovieItem } from '../CommonMovieList/CommonMovieItem';

import '../../assets/index.less';
import { Wrapper, WrapperList } from './MoviesSearchList.styled';

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
