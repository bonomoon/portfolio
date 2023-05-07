import { ReactNode } from "react";
import styled from "styled-components";
import Container from "@components/atoms/Container";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  margin: 0 auto;
  padding: 80px 0 120px 0;
`;

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => (
  <MainContainer>
    <Container>
        {children}
    </Container>
  </MainContainer>
);

export default Main;