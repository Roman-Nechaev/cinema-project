import { useLocation } from 'react-router-dom';

import checkPoster from '../../utils/checkPoster';

import 'react-circular-progressbar/dist/styles.css';
import {
  ListItem,
  Details,
  ItemImg,
  LinkSt,
  Title,
} from './CommonHomeItem.styled';

export const CommonHomeItem = moviesItem => {
  const { id, title, poster_path } = moviesItem;

  const location = useLocation();

  return (
    <>
      <ListItem>
        <LinkSt to={`/movies/${id}`} state={{ from: location }}>
          <ItemImg loading="lazy" src={checkPoster(poster_path)} alt={title} />
          <Details>
            <div>
              <Title>{title}</Title>
            </div>
          </Details>
        </LinkSt>
      </ListItem>
    </>
  );
};
