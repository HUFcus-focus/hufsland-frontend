import styled from "styled-components";

import { LogoWhiteSVG } from "@/assets/svg";

const SharedLayout = ({ children }: { children: JSX.Element[] }) => {
  return (
    <Wrapper>
      <LogoWhiteSVG width='80px' style={{ marginTop: "80px" }} />
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.blue};
  position: relative;
  text-align: center;
  height: 100%;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 75%;
  border-radius: 50px 50px 0px 0px;
`;
