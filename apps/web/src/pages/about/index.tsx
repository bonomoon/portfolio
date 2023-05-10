import Head from "next/head";
import styled from "styled-components";
import MainHeader from "@components/organisms/MainHeader";
import MainFooter from "@components/organisms/MainFooter";

const MainHeaderWrapper = styled.div`
  display: flex;
  gap: 1.75rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainHeaderContent = styled.h6`
  color: #666;
  font-weight: 400;

`;

const Profile = styled.div`
  width: 800px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileImg = styled.div`
  width: auto;
  height: 500px;
  background-image: url('/images/me.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About | Bong-oh Moon</title>
      </Head>
      <MainHeaderWrapper>
        <MainHeader title={`Hello, I'm\nBong-oh Moon,\nSoftware Engineer.`}>
          <MainHeaderContent>
            My work is mainly focused on back-end and software engineering. I
            like solving problems in various domain and study technologies for
            them.
            <br />
            <br />
            I recently completed my service as a software engineer in *ROKAF,
            where I developed full-stack, web-based systems for education and
            welfare.
            <br />
            <br />
            Now, I’m currently seeking job opportunities.
            <br />
            <br />
            <label>*ROKAF: Republic of Korea Air Force</label>
          </MainHeaderContent>
        </MainHeader>
        <Profile>
          <ProfileImg />
        </Profile>
      </MainHeaderWrapper>
      <MainFooter />
    </>
  );
}
