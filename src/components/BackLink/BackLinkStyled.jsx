import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const ArrowLeft = styled(FiArrowLeft)`
  font-size: 1rem;
  margin-right: 2px;
`;

export const BackToLinkSt = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: inherit;
  border: none;
  width: 100px;
  padding-left: 2px;
  height: 20px;
  font-size: 6px;
  color: #000000;
`;
