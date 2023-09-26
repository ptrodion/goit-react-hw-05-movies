import {
  MovDetList,
  MovDetSubTitle,
  MovDetTitle,
  MovDetTitleWrapper,
  MovDetWrapper,
  MovDetDescription,
  MovDetItem,
} from 'pages/Movie/MovieStyled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
            image
              ? `// https://image.tmdb.org/t/p/original${image}`
              : defaultImg
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
