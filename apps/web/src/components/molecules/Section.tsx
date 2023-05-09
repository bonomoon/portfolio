import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

/**
 * Styled Section component container.
 */
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.375rem 0;
`;

/**
 * Styled Section Header.
 */
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.125rem;
`;

/**
 * Styled Section Header Title.
 */
const SectionTitle = styled.h3`
  font-weight: 600;
  color: #0e0e6c;
`;

/**
 * Styled Section Header Link.
 */
const SectionLink = styled(Link)`
  font-family: "Inter";
  color: #9e9e9e;
`;

/**
 * Styled Section Body.
 */
const SectionBody = styled.div`
  font-family: "Inter";
`;

/**
 * @typedef {object} SectionLinkProps Section link component props
 * @property {string} value href
 * @property {string} name link name
 */
type SectionLinkProps = {
  value: string;
  name?: string;
};

/**
 * @typedef {object}SectionProps Section component props
 * @property {string} title
 * @property {SectionLinkProps} link
 * @property {ReactNode} children 
 */
type SectionProps = {
  title: string;
  link?: SectionLinkProps;
  children: ReactNode;
};

/**
 * Page section component.
 *
 * @param {SectionProps} props
 * @returns {React.FC}
 */
const Section: React.FC<SectionProps> = ({title, link, children}) => (
      <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
          {link && (
            <div>
              <SectionLink href={link.value}>
                {(link.name ?? "More") + "↗"}
              </SectionLink>
            </div>
          )}
      </SectionHeader>
      <SectionBody>{children}</SectionBody>
    </SectionContainer>
);

export default Section;
