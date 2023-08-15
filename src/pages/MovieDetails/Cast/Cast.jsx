import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchRequestCast } from '../../../redux/requestCast/operations';
import { selectMoviesCast } from '../../../redux/requestCast/selector';
import { checkAvatarCast } from '../../../utils/checkAvatarCast';

import { CastScrolled, Character, Img, LiCard, Name, Ul } from './Cast.styled';

export const Cast = () => {
  const dispatch = useDispatch();
  const moviesCast = useSelector(selectMoviesCast);

  const { moviesId } = useParams();

  useEffect(() => {
    dispatch(fetchRequestCast(moviesId));
  }, [dispatch, moviesId]);

  return (
    <CastScrolled>
      {moviesCast && (
        <Ul>
          {moviesCast.map(({ id, name, character, profile_path }) => (
            <LiCard key={id}>
              <Img
                loading="lazy"
                src={checkAvatarCast(profile_path)}
                alt={name}
              />
              <Name>{name}</Name>
              <Character>{character}</Character>
            </LiCard>
          ))}
        </Ul>
      )}
    </CastScrolled>
  );
};
