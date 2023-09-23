import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  AddInfoList,
  AddInfoListSpan,
  AddInfoTitle,
  AddInfoWrapper,
} from './AdditionalInfoStyled';

export const AdditionalInfo = () => {
  const navigate = useNavigate();

  const handleCastClick = () => {
    navigate('cast');
  };

  const handleReviewsClick = () => {
    navigate('reviews');
  };

  return (
    <AddInfoWrapper>
      <AddInfoTitle> Additional information</AddInfoTitle>
      <AddInfoList type="button" onClick={handleCastClick}>
        <AddInfoListSpan>Cast</AddInfoListSpan>
      </AddInfoList>
      <AddInfoList type="button" onClick={handleReviewsClick}>
        <AddInfoListSpan>Reviews</AddInfoListSpan>
      </AddInfoList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AddInfoWrapper>
  );
};
