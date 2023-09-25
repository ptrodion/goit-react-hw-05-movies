import defaultImage from './default_profile.jpg';
import {
  CastsItemSt,
  CastsItemImg,
  CastsTitleNameSt,
  CastsTitleCharacterSt,
} from './CastItemStyled';

export const CastsItem = ({ image, alt, character }) => {
  return (
    <CastsItemSt>
      <CastsTitleNameSt>{alt}</CastsTitleNameSt>
      <CastsItemImg
        src={
          image ? `https://image.tmdb.org/t/p/original${image}` : defaultImage
        }
        alt={'photo not found'}
        width="350"
      />
      <CastsTitleCharacterSt>{`Character: ${character}`}</CastsTitleCharacterSt>
    </CastsItemSt>
  );
};
