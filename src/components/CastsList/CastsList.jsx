import { CastsItem } from '../CastItem/CastItem';
import { CastsListSt } from './CastsList.styled';

export const CastsList = ({ actors }) => {
  return (
    <>
      <CastsListSt>
        {actors.map(({ id, profile_path, original_name, character }) => (
          <CastsItem
            key={id}
            image={profile_path}
            alt={original_name}
            character={character}
          ></CastsItem>
        ))}
      </CastsListSt>
    </>
  );
};
