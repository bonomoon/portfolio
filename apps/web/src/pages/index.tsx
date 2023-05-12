import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Section from "@components/molecules/Section";
import MainHeader, {
  Description as MainHeaderDescription,
} from "@components/organisms/MainHeader";
import MainFooter from "@components/organisms/MainFooter";

/**
 * Styled main header component wrapper.
 */
const MainHeaderWrapper = styled.div`
  display: flex;
  gap: 3.5rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

/**
 * Styled main header right component
 */
const MainHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

/**
 * Styled tag component in main header right component.
 */
const MainHeaderRightTag = styled.h6`
  color: #595ddc;
  font-weight: 600;
  font-style: italic;
`;

/**
 * Styled main header link component.
 */
const AboutLink = styled(Link)`
  color: #333;
  font-size: 1.125rem;
  font-weight: 500;

  &:hover {
    color: #878787;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Bong-oh Moon</title>
      </Head>
      <MainHeaderWrapper>
        <MainHeader title={`Hello, I'm\nBong-oh Moon.`} />
        <MainHeaderRight>
          <MainHeaderRightTag>#OpenToHiring</MainHeaderRightTag>
          <MainHeaderDescription>
            Software Engineer, especially back-end,
            <br />
            who likes to brew coffee and play tennis.
          </MainHeaderDescription>
        </MainHeaderRight>
      </MainHeaderWrapper>
      <div style={{ marginBottom: "1.5rem" }}>
        <AboutLink href={"/about"}>More about me ↗</AboutLink>
      </div>
      <Section
        title={"Recent Posts"}
        link={{ value: "/blog", name: "More posts" }}
      >
        <></>
      </Section>
      <MainFooter />
    </>
  );
}
