import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { authApi } from "@/shared/api";
import { userState } from "@/shared/state/user";

const Kakao = () => {
  const code = new URL(document.URL).searchParams.get("code");
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const kakaoLogin = async () => {
    if (typeof code === "string") {
      const kakaoToken = await authApi.getKakaoToken(code);
      const serviceToken = await authApi.getServiceToken(kakaoToken.access_token);
      if (serviceToken.token) {
        localStorage.setItem("user", JSON.stringify({ token: serviceToken.token }));
        setUser({ ...user, isLoggedIn: true });
      }
    }
    navigate("/");
  };

  useEffect(() => {
    kakaoLogin();
  }, []);

  return <>Loading...</>;
};

export default Kakao;
