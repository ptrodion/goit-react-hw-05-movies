import {
  MovDetList,
  MovDetSubTitle,
  MovDetTitle,
  MovDetTitleWrapper,
  MovDetWrapper,
  MovDetDescription,
  MovDetItem,
} from 'pages/Movie/MovieStyled';
import defaultImage from './defaultMovie.jpg';

export const MoviesDetails = ({
  dates: { original_title: title, vote_average, overview: description, genres },
  image,
}) => {
  const resultString = genres.reduce((accumulator, currentGenre) => {
    return accumulator === ''
      ? currentGenre.name
      : `${accumulator}, ${currentGenre.name}`;
  }, '');

  const rating = vote_average.toString().slice(0, -2);

  return (
    <MovDetWrapper>
      <MovDetTitleWrapper>
        <img
          src={
            image ? `https://image.tmdb.org/t/p/original${image}` : defaultImage
          }
          alt={title}
          width={150}
        />
      </MovDetTitleWrapper>
      <MovDetList>
        <MovDetItem>
          <MovDetTitle>{title}</MovDetTitle>
          <MovDetDescription>User score: {rating}%</MovDetDescription>
        </MovDetItem>
        <MovDetItem>
          <MovDetSubTitle>Overview:</MovDetSubTitle>
          <MovDetDescription>{description}</MovDetDescription>
        </MovDetItem>
        <MovDetItem>
          <MovDetSubTitle>Genres:</MovDetSubTitle>
          <MovDetDescription>{resultString}</MovDetDescription>
        </MovDetItem>
      </MovDetList>
    </MovDetWrapper>
  );
};
