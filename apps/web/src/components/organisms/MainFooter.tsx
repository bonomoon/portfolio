import Link from "next/link";
import styled from "styled-components";

const MainFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #666;
  padding-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const MainFooterLeft = styled.div`
  width: 100%;
`;

const MainFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;

const MainFooterLink = styled(Link)`
  color: #232323;

  &:hover {
    color: #666;
  }
`;

/**
 * Page Footer Component.
 *
 * @returns {JSX.Element}
 */
const MainFooter = () => (
  <MainFooterContainer>
    <MainFooterLeft>
      <h4>
        If you'd like to talk about
        <br />
        my next career{" "}
        <span style={{ fontWeight: 600, marginLeft: "1.5rem" }}>→</span>
      </h4>
    </MainFooterLeft>
    <MainFooterRight>
      <div>
        <MainFooterLink href="mailto:bongohmoon@gmail.com">
          <h5 style={{display: 'inline'}}>bongohmoon@gmail.com</h5>
        </MainFooterLink>
      </div>
      <div>
        <MainFooterLink href="/resume">View Resume ↗</MainFooterLink>
      </div>
    </MainFooterRight>
  </MainFooterContainer>
);

export default MainFooter;
