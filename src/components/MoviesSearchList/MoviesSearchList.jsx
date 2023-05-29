import { useSelector } from 'react-redux';

import { MoviesSearchItem } from './MoviesSearchItem/MoviesSearchItem';

import { Wrapper, WrapperList } from './MoviesSearchList.styled';

import '../../assets/index.less';
import { selectMoviesSearch } from '../../redux/movieSearch/selector';

export const MoviesSearchList = () => {
  const searchFilms = useSelector(selectMoviesSearch);

  return (
    <Wrapper>
      <WrapperList>
        {searchFilms &&
          searchFilms.map(item => <MoviesSearchItem key={item.id} {...item} />)}
      </WrapperList>
    </Wrapper>
  );
};
