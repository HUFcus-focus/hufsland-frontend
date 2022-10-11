import styled from "styled-components";

import { kakaoLogin } from "@/assets/img";
import { AuthBubbleSVG, LogoWhiteSVG } from "@/assets/svg";
import { URL } from "@/constants";

const Auth = () => {
  return (
    <AuthLayout>
      <LogoWhiteSVG width='80px' style={{ marginTop: "80px" }} />
      <AuthContainer>
        <AuthText>
          <span style={{ fontWeight: "bold" }}>소셜로그인</span>으로
          <br /> 간편하게 시작해보세요.
        </AuthText>
        <AuthBubbleSVG />
        <a href={URL.KAKAO_AUTH}>
          <img src={kakaoLogin} style={{ marginTop: "20px", width: "280px" }} alt='kaka_login' />
        </a>
      </AuthContainer>
    </AuthLayout>
  );
};

export default Auth;

const AuthLayout = styled.div`
  background-color: ${({ theme }) => theme.color.blue};
  position: relative;
  text-align: center;
  height: 100%;
`;

const AuthContainer = styled.div`
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

const AuthText = styled.div`
  color: ${({ theme }) => theme.color.blue};
  font-family: "Noto Sans KR";
  margin-top: 50px;
  margin-bottom: 70px;
  font-size: 24px;
  line-height: 35px;
`;
