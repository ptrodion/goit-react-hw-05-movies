import { ArrowLeft, BackToLinkSt } from './BackLinkStyled';

export const BackToLink = ({ backLinkHref }) => {
  return (
    <BackToLinkSt to={backLinkHref}>
      <ArrowLeft size="7px" />
      <span>Go back</span>
    </BackToLinkSt>
  );
};
