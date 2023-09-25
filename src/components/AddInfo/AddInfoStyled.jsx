import styled from 'styled-components';

export const AddInfoTitle = styled.h3`
  font-size: 16px;
`;

export const AddInfoList = styled.button`
  font-size: 10px;
`;

export const AddInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${props => props.theme.spacing(1)};
`;

export const AddInfoListSpan = styled.span`
  font-size: 14px;
`;
