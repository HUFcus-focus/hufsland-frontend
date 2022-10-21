import styled from "styled-components";

import { kakaoLogin } from "@/assets/img";
import { AuthBubbleSVG } from "@/assets/svg";
import { SharedLayout } from "@/components/common";
import { URL } from "@/constants";

const Auth = () => {
  return (
    <SharedLayout>
      <Text>
        <span style={{ fontWeight: "bold" }}>소셜로그인</span>으로
        <br /> 간편하게 시작해보세요.
      </Text>
      <AuthBubbleSVG style={{ marginTop: "70px" }} />
      <a href={URL.KAKAO_AUTH}>
        <img src={kakaoLogin} style={{ marginTop: "20px", width: "280px" }} alt='kaka_login' />
      </a>
    </SharedLayout>
  );
};

export default Auth;

const Text = styled.div`
  color: ${({ theme }) => theme.color.blue};
  font-family: "Noto Sans KR";
  margin-top: 50px;
  font-size: 24px;
  line-height: 35px;
`;
