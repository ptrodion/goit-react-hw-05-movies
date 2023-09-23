import styled from 'styled-components';

export const ReviewsItemT = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`;

export const ReviewsItemTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 7px; */
`;

export const ReviewsItemText = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
`;
