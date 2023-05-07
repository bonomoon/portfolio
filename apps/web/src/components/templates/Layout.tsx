import Header from "@components/organisms/Header";
import { ReactNode } from "react";
import styled from "styled-components";

/**
 * Styled Container component for the layout
 */
const Container = styled.div`
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`;

/**
 * Props for the Layout component.
 * 
 * @typedef {object} LayoutProps
 * @property {ReactNode} children - The children components to be rendered within the layout
 */
type LayoutProps = {
  children: ReactNode;
};

/**
 * Layout component that wraps the application content with Header, Main, and Footer components
 *
 * @param {LayoutProps} props
 * @returns {React.FC} The rendered Layout component with Header, Main, and Footer
 */
const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Layout;
