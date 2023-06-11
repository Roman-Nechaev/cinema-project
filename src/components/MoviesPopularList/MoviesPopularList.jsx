import { useSelector } from 'react-redux';

import { selectMovies } from '../../redux/selector';

import { CommonMovieItem } from '../CommonMovieList/CommonMovieItem';

import { Wrapper, WrapperList } from './MoviesPopularList.styled';
import '../../assets/index.less';

export const MoviesPopularList = () => {
  const moviesPopular = useSelector(selectMovies);

  return (
    <Wrapper>
      <WrapperList>
        {moviesPopular.map(item => (
          <CommonMovieItem key={item.id} {...item} />
        ))}
      </WrapperList>
    </Wrapper>
  );
};
