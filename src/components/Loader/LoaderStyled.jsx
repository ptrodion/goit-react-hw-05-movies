import styled from 'styled-components';
import { FadeLoader } from 'react-spinners';

export const FadeLoaderStyled = styled(FadeLoader)`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const FadeLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
