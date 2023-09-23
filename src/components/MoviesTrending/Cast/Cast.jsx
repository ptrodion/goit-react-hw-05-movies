import { getDates } from 'components/Api/api';
import { CastsList } from 'components/MoviesTrending/Cast/CastsList/CastsList';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { id } = useParams();
  const [url] = useState(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`
  );

  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const resp = await getDates(url, controller);

        if (resp.cast.length !== 0) {
          setActors(resp.cast);
        } else {
          toast.error('Nothing found for this query.');
        }

        setActors(resp.cast);
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

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={'What went wrong, try again.'} />}
      <CastsList actors={actors} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
