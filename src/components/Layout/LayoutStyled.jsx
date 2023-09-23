import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #e9f0e4;
`;

export const ListRouters = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing(5)};
  align-items: center;
  margin-left: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #000000;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ed1e1e;
  }

  &:hover {
    color: #5f37ca;
  }
`;

export const Main = styled.main`
  background-color: #e2e7ea;
`;
