// import defaultPoster from '../assets/img/no-poster-available.jpg';

const checkBackdropImage = (poster, backdrop) => {
  if (!backdrop) {
    return `https://image.tmdb.org/t/p/w500${poster}`;
  }

  return `https://image.tmdb.org/t/p/original/${backdrop}`;
};

export default checkBackdropImage;
