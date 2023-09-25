import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { BackToLink } from 'components/BackLink/BackLink';
import { getDates } from 'helpers/Api/api';
import { MoviesDetails } from 'components/MoviesDetails/MoviesDetails';
import { AdditionalInfo } from 'components/AddInfo/AddInfo';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { Toaster } from 'react-hot-toast';

export default function Movie() {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { id } = useParams();

  const [dates, setDates] = useState(null);
  // const [img, setImg] = useState(' ');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const resp = await getDates(`3/movie/${id}?language=en-US`, controller);
        // setImg();
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
  }, [id]);

  return (
    <>
      {dates && (
        <>
          <BackToLink backLinkHref={backLinkHref.current} />
          <MoviesDetails dates={dates} image={dates?.poster_path} />
          <AdditionalInfo />
          {loading && <Loader />}
          {error && <Error message={'What went wrong, try again.'} />}
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
