import { NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #9991A8;
  height: 90px;
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content:center;
`;


export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4C594C;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  margin-right: -24px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;


