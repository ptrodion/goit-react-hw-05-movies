import styled from 'styled-components';

export const MovDetWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(6)};
  /* border-bottom: 1px solid #000; */
  margin-bottom: 10px;
`;

export const MovDetTitleWrapper = styled.div`
  min-width: 120px;
`;

export const MovDetList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${props => props.theme.spacing(3)};
`;

export const MovDetItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${props => props.theme.spacing(1)};
`;

export const MovDetTitle = styled.h2`
  font-size: 20px;
  display: flex;
`;

export const MovDetSubTitle = styled.h2`
  font-size: 16px;
`;

export const MovDetDescription = styled.p`
  font-size: 10px;
`;
