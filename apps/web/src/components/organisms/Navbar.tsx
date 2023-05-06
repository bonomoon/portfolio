import { Menu, MenuItemProps } from "@components/molecules/Menu";
import Link from "next/link";
import styled from "styled-components";

/**
 * Styled Navbar wrapper component.
 */
const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
`;

/**
 * Styled Logo component.
 */
const Logo = styled(Link)`
  font-family: 'Inter', san-serif;
  font-size: 1.625rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

/**
 * Props for the Navbar component.
 * 
 * @typedef {object} NavbarProps
 * @property {MenuItemProps[]} links - Array of MenuItemProps for the menu items.
 */
type NavbarProps = {
  links: MenuItemProps[];
};

/**
 * Navbar component.
 * 
 * @param {NavbarProps} props
 * @returns {React.FC}
 */
const Navbar: React.FC<NavbarProps> = ({links}) => {
  return (
      <NavbarWrapper>
        <Logo href="/">@bonomoon</Logo>
        <Menu items={links} />
      </NavbarWrapper>
  );
};

export default Navbar;
