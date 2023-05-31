import defaultPhoto from '../assets/img/no-photo.png';

export const checkAvatarCast = img => {
  if (!img) {
    return defaultPhoto;
  }
  return `https://image.tmdb.org/t/p/w500${img}`;
};
