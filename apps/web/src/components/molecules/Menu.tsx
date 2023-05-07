import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import MenuLink from "@components/atoms/MenuLink";

/**
 * Styled container for the menu
 */
const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

/**
 * Styled menu item component
 */
const MenuItem = styled.li<{active: boolean}>`
  margin-right: 2rem;

  a {
    color: ${({active}) => (active ? '#1C35EC' : '#181717')};

    &:hover {
      color: #162595;
    }
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

/**
 * @typedef {object} MenuProps
 * @property {MenuItemProps[]} items - Array of menu items
 */
type MenuProps = {
  items: MenuItemProps[];
};

/**
 * @typedef {object} MenuItemProps
 * @property {string} name - The name of the menu item
 * @property {"_self" | "_blank" | undefined} [target] - The target attribute for the link (optional)
 * @extends LinkProps
 */
export type MenuItemProps = {
  name: string;
  target?: "_self" | "_blank" | undefined;
} & LinkProps;

/**
 * Menu component to render a list of menu items
 *
 * @param {MenuProps} props
 * @returns {React.FC}
 */
export const Menu: React.FC<MenuProps> = ({ items }) => {
  const router = useRouter();
  
  let menuItems = items.map((item, index) => (
    <MenuItem key={index} active={item.href === router.pathname}>
      <MenuLink href={item.href} target={item.target ?? "_self"}>
        {item.name}
      </MenuLink>
    </MenuItem>
  ));

  return <MenuContainer>{menuItems}</MenuContainer>;
};
