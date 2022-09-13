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
      const res = await authApi.sendKakaoToken(kakaoToken.access_token);
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("user", JSON.stringify({}));
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
