import Container from "@components/atoms/Container";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

/**
 * Styled header container component.
 */
const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

/**
 * Styled fixed component on top.
 */
const FixedTop = styled.div<{isScrollY: Boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #FAFAFA;
  box-shadow: ${(props) => props.isScrollY ? '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)' : 'none'};
  z-index: 3000;
  transition: background .3s ease,box-shadow .3s ease;
`;

// Nav links
const navItems = [
  {
    href: "/blog",
    name: "Blog",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/resume",
    name: "Resume",
  },
];

/**
 * Header component.
 */
const Header = () => {
  const [isScrolledY, setIsScrollY] = useState<Boolean>(false);

  // Handle scroll event to update style of the fixed header.
  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setIsScrollY(true);
    } else {
      setIsScrollY(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener to handle scroll behavior.
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
        <FixedTop isScrollY={isScrolledY}>
          <Container>
            <Navbar links={navItems} />
          </Container>
        </FixedTop>
    </HeaderContainer>
  );
};

export default Header;
