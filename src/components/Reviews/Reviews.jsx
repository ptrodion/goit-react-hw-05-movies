import { getDates } from 'components/Api/api';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { ReviewsInformation } from './ReviewsStyled';

export default function Reviews() {
  const { id } = useParams();
  const [url] = useState(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`
  );

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const resp = await getDates(url, controller);
        if (resp.results.length !== 0) {
          setReviews(resp.results);
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

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={'What went wrong, try again.'} />}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <div>
          <ReviewsInformation>
            We don`t have any reviews for this movie
          </ReviewsInformation>
        </div>
      )}
    </>
  );
}
