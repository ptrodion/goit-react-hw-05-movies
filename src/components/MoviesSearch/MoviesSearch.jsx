import { getDates } from 'components/Api/api';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/MoviesSearch/SearchBar/SearchBar';
import { TrendingList } from 'components/MoviesTrending/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useSearchParams } from 'react-router-dom';

export default function MoviesSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}`;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await getDates(url, controller);

        if (results.length !== 0) {
          setMovies([...results]);
        } else {
          toast.error('Nothing found for this query.');
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  const onSubmit = query => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <>
        {movies.length > 0 && (
          <>
            {loading && <Loader />}
            {error && <Error message={'What went wrong, try again.'} />}
            <TrendingList movies={movies} />
          </>
        )}
        <Toaster position="top-right" reverseOrder={false} />
      </>
    </>
  );
}
