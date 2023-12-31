import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { TrendingListSt } from './TrendingListStyled';

export const TrendingList = ({ movies }) => {
  return (
    <>
      <TrendingListSt>
        {movies.map(({ id, title, name }) => (
          <TrendingItem key={id} title={title || name} id={id}></TrendingItem>
        ))}
      </TrendingListSt>
    </>
  );
};
