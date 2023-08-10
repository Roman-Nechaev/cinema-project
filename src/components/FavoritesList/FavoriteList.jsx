import { useSelector } from 'react-redux';

import { selectFilmsIdValue } from '../../redux/savedFilmsId/savedFilmsIdSlice';
import { CommonMovieItem } from '../CommonMovieList/CommonMovieItem';

import { Wrapper, WrapperList, Info } from './FavoriteList.styled';

export const FavoriteList = () => {
  const savedFilmsId = useSelector(selectFilmsIdValue);

  return (
    <Wrapper>
      {savedFilmsId.length <= 0 ? (
        <Info>Unfortunately, there are no favorites yet</Info>
      ) : (
        <WrapperList>
          {savedFilmsId.map(item => (
            <CommonMovieItem key={item.id} {...item} />
          ))}
        </WrapperList>
      )}
    </Wrapper>
  );
};
