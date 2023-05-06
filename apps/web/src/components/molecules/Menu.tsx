import { LinkProps } from "next/link";
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
const MenuItem = styled.li`
  margin-right: 2rem;
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
export const Menu = (props: MenuProps) => {
  const items = props.items;

  let menuItems = items.map((item, index) => (
    <MenuItem key={index}>
      <MenuLink href={item.href} target={item.target ?? "_self"}>
        {item.name}
      </MenuLink>
    </MenuItem>
  ));

  return <MenuContainer>{menuItems}</MenuContainer>;
};
