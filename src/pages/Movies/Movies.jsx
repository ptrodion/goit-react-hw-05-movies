import { MoviesSearchList } from 'components/MovieSearchList/MovieSearchList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = query => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <MoviesSearchList />
    </>
  );
}
