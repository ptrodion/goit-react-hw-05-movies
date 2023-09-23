import styled from 'styled-components';

export const Tittle = styled.h1`
  font-size: 18px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TrendingListSt = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};
  margin-left: 50px;
`;
