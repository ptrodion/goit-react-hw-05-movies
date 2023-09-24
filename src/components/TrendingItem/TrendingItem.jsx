import { useLocation } from 'react-router-dom';
import { TrendingLink } from './TrendingItemStyled';

export const TrendingItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <li>
      <TrendingLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </TrendingLink>
    </li>
  );
};
