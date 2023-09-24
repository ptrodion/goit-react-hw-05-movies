import { useEffect, useState } from 'react';
import {
  CastsItemSt,
  CastsItemImg,
  CastsTitleNameSt,
  CastsTitleCharacterSt,
} from './CastItemStyled';

export const CastsItem = ({ image, alt, character }) => {
  const [img, setImg] = useState(' ');
  useEffect(() => {
    setImg(`https://image.tmdb.org/t/p/original${image}`);
  }, [image]);

  return (
    <CastsItemSt>
      <CastsTitleNameSt>{alt}</CastsTitleNameSt>
      <CastsItemImg
        src={img}
        alt={`
Шn this photo: ${alt}`}
        width="350"
      />
      <CastsTitleCharacterSt>{`Character: ${character}`}</CastsTitleCharacterSt>
    </CastsItemSt>
  );
};
