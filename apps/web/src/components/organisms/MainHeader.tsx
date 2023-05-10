import { ReactNode } from "react";
import styled from "styled-components";

/**
 * Styled main header container.
 */
const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

/**
 * Main header title.
 */
const Title = styled.h1`
  line-height: 4rem;
  white-space: pre;

  @media (max-width: 480px) {
    font-size: 3.062rem;
    line-height: 3.5rem;
  }
`;

/**
 * Main header description. 
 */
export const Description = styled.h5`
  color: #6c6c6c;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 1.250rem;
  }
`;

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
const MainHeader = ({ title, description, children }: MainHeaderProps) => (
  <MainHeaderContainer>
    <Title>{title}</Title>
    {description && (
      <Description>{description}</Description>
    )}
    {children}
  </MainHeaderContainer>
);

export default MainHeader;
