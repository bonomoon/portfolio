import { ReactNode } from "react";

/**
 * Props for the MainHeader component.
 *
 * @typedef {object} NavbarProps
 * @property {string} title Page title
 * @property {string} description Page description
 * @property {ReactNode} children Page Header child components
 */
export type MainHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

/**
 * Page Header component.
 *
 * @param {MainHeaderProps} props
 * @returns {React.FC}
 */
const MainHeader = ({ title, description, children }: MainHeaderProps) => <></>;

export default MainHeader;
