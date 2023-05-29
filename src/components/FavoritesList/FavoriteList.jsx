import { useSelector } from 'react-redux';

import { FavoritesItem } from '../FavoritesList/FavoritesItem/FavoritesItem';
import { selectFilmsIdValue } from '../../redux/savedFilmsId/savedFilmsIdSlice';

import { Wrapper, WrapperList } from './FavoriteList.styled';

export const FavoriteList = () => {
  const savedFilmsId = useSelector(selectFilmsIdValue);

  return (
    <Wrapper>
      <WrapperList>
        {savedFilmsId.map(item => (
          <FavoritesItem key={item.id} {...item} />
        ))}
      </WrapperList>
    </Wrapper>
  );
};
