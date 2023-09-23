import styled from 'styled-components';

export const CastsItemSt = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  gap: ${props => props.theme.spacing(1)};
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastsItemImg = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  } */
`;

export const CastsTitleNameSt = styled.h3`
  font-size: 14px;
`;

export const CastsTitleCharacterSt = styled.h3`
  font-size: 10px;
`;
