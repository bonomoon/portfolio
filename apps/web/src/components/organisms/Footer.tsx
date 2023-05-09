import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "@components/atoms/Container";
import { Menu, MenuItemProps } from "@components/molecules/Menu";

/**
 * Styled footer container component.
 */
const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 0 0 2rem 0;
`;

/**
 * Styled footer wrapper component.
 */
const FooterWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding-top: 2rem;
  margin-top: 100px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 1.25rem;
  }
`;

/**
 * Styled text for License.
 */
const License = styled.span`
  color: #2429af;
  font-weight: 500;
  font-size: 18px;
`;

// Nav links
const menuItems: Array<MenuItemProps> = [
  {
    href: "https://github.com/bonomoon",
    name: "Github",
    icon: <FaGithub />,
    target: "_blank",
  },
  {
    href: "https://linkedin.com/in/bong-oh-moon",
    name: "LinkedIn",
    icon: <FaLinkedin />,
    target: "_blank",
  },
  {
    href: "https://www.instagram.com/bono__moon",
    name: "Instagram",
    icon: <FaInstagram />,
    target: "_blank",
  },
];

/**
 * Footer component.
 */
const Footer = () => (
  <FooterContainer>
    <Container>
      <FooterWrapper>
        <License>Bong-oh Moon ⏤ © 2023</License>
        <Menu items={menuItems} />
      </FooterWrapper>
    </Container>
  </FooterContainer>
);

export default Footer;
