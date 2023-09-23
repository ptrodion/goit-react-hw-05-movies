import { useEffect, useState } from 'react';
import { AdditionalInfo } from 'components/MoviesTrending/AdditionalInfo/AdditionalInfo';
import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { getDates } from 'components/Api/api';
import { Error } from 'components/Error/Error';
import { MoviesDetails } from './MoviesDetails/MoviesDetails';

export const MoviesGeneral = ({ url }) => {
  const [dates, setDates] = useState(null);
  const [img, setImg] = useState(' ');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const resp = await getDates(url, controller);

        setImg(`https://image.tmdb.org/t/p/original${resp?.poster_path}`);
        setDates(resp);
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

  return dates ? (
    <>
      <MoviesDetails dates={dates} srs={img} />
      <AdditionalInfo />
      {loading && <Loader />}{' '}
      {error && <Error message={'What went wrong, try again.'} />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  ) : (
    <> {error && <Error message={'What went wrong, try again.'} />}</>
  );
};
