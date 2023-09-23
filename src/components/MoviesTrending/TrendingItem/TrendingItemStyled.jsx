import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendingLink = styled(NavLink)`
  &::before {
    content: '🎬';
    margin-right: 10px;
    color: #ff6600;
    font-size: 14px;
  }
`;
