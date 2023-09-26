import {
  CastsItemSt,
  CastsItemImg,
  CastsTitleNameSt,
  CastsTitleCharacterSt,
} from './CastItemStyled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const CastsItem = ({ image, alt, character }) => {
  return (
    <CastsItemSt>
      <CastsTitleNameSt>{alt}</CastsTitleNameSt>
      <CastsItemImg
        src={image ? `https://image.tmdb.org/t/p/original${image}` : defaultImg}
        alt={'photo not found'}
        width="350"
      />
      <CastsTitleCharacterSt>{`Character: ${character}`}</CastsTitleCharacterSt>
    </CastsItemSt>
  );
};
