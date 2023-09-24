import { useLocation, useParams } from 'react-router-dom';
import { useRef, useState } from 'react';

import { BackToLink } from 'components/BackLink/BackLink';
import { MoviesTrending } from 'components/MoviesTrending/MoviesTrending';

export default function Movie() {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { id } = useParams();
  const [url] = useState(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  );

  return (
    <>
      <BackToLink backLinkHref={backLinkHref.current} />
      <MoviesTrending url={url} />
    </>
  );
}
