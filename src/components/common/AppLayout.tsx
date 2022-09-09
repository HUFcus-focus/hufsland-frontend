import styled from "styled-components";
import { media } from "@/styles/theme";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Wrapper>
      <AppContainer>{children}</AppContainer>
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppContainer = styled.div`
  width: 375px;
  height: 812px;
  box-shadow: 0 0 2rem 0.1rem rgba(0, 0, 0, 0.2);
  ${media.mobile} {
    width: 100vw;
    height: 100vh;
    margin: 0;
    box-shadow: none;
  }
`;
