import { getDates } from 'helpers/Api/api';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export const MoviesSearchList = () => {
  const [searchParams] = useSearchParams();
  const nameMovie = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!nameMovie) {
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await getDates(
          `search/movie?query=${nameMovie}`,
          controller
        );

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
  }, [nameMovie]);

  return (
    <>
      {movies.length > 0 && (
        <>
          {loading && <Loader />}

          <TrendingList movies={movies} />
        </>
      )}
      {error && <Error message={'What went wrong, try again.'} />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
