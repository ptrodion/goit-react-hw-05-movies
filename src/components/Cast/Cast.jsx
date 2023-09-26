import { getDates } from 'helpers/Api/api';
import { CastsList } from 'components/CastsList/CastsList';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { id } = useParams();

  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const { cast } = await getDates(
          `movie/${id}/credits?language=en-US`,
          controller
        );

        if (cast !== 0) {
          setActors(cast);
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
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={'What went wrong, try again.'} />}
      <CastsList actors={actors} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
