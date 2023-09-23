import { ReviewsItem } from '../ReviewsItem/ReviewsItem';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      {}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <ReviewsItem key={id} author={author} content={content}></ReviewsItem>
        ))}
      </ul>
    </>
  );
};
