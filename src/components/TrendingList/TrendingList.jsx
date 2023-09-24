import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { TrendingListSt } from './TrendingListStyled';

export const TrendingList = ({ movies }) => {
  return (
    <>
      <TrendingListSt>
        {movies.map(({ id, title, name }) => (
          <TrendingItem
            key={id}
            title={
              (title &&
                title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()) ||
              (name &&
                name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
            }
            id={id}
          ></TrendingItem>
        ))}
      </TrendingListSt>
    </>
  );
};
