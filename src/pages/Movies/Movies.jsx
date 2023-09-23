import { useLocation, useParams } from 'react-router-dom';
import { useRef, useState } from 'react';

import { BackToLink } from 'components/BackLink/BackLink';
import { MoviesGeneral } from 'components/MoviesTrending/MoviesTrending';
import MoviesSearch from 'components/MoviesSearch/MoviesSearch';

export default function Movies() {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { id } = useParams();
  const [url] = useState(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  );

  return (
    <>
      {id ? (
        <>
          <BackToLink backLinkHref={backLinkHref.current} />
          <MoviesGeneral url={url} />
        </>
      ) : (
        <MoviesSearch />
      )}
    </>
  );
}
