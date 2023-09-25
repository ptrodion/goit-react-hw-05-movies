import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { getDates } from 'helpers/Api/api';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { Tittle } from 'components/TrendingList/TrendingListStyled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await getDates('3/trending/all/day', controller);

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
  }, []);

  return (
    <>
      {movies.length > 0 && (
        <>
          {loading && <Loader />}
          {error && <Error message={'What went wrong, try again.'} />}
          <Tittle>Trending Today:</Tittle>
          <TrendingList movies={movies} />
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
