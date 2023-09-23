import { FadeLoaderWrapper, FadeLoaderStyled } from './LoaderStyled';

export const Loader = () => {
  return (
    <FadeLoaderWrapper>
      <FadeLoaderStyled
        color="#2e3481"
        height="10px"
        width="10px"
        radius="10px"
      />
    </FadeLoaderWrapper>
  );
};
