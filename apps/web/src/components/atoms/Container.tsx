import styled from "styled-components";
import { ReactNode } from "react";

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.25rem;
  box-sizing: border-box;
`;

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

export default Container;
