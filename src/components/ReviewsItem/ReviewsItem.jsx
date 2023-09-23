import {
  ReviewsItemT,
  ReviewsItemText,
  ReviewsItemTitle,
} from './ReviewsItemStyled';

export const ReviewsItem = ({ author, content }) => {
  return (
    <ReviewsItemT>
      <ReviewsItemTitle>{`Author: ${author}`}</ReviewsItemTitle>
      <ReviewsItemText>{content}</ReviewsItemText>
    </ReviewsItemT>
  );
};
