import { useSelector } from 'react-redux';

import { selectFilmsIdValue } from '../../redux/savedFilmsId/savedFilmsIdSlice';
import { CommonMovieItem } from '../CommonMovieList/CommonMovieItem';

import { Wrapper, WrapperList } from './FavoriteList.styled';

export const FavoriteList = () => {
  const savedFilmsId = useSelector(selectFilmsIdValue);

  return (
    <Wrapper>
      <WrapperList>
        {savedFilmsId.map(item => (
          <CommonMovieItem key={item.id} {...item} />
        ))}
      </WrapperList>
    </Wrapper>
  );
};
