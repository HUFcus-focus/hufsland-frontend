import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { authApi } from "@/api";
import { Loading } from "@/components/common";
import { ERROR, TOKEN } from "@/constants";
import { userState } from "@/state/user";

const Kakao = () => {
  const code = new URL(document.URL).searchParams.get("code");
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const kakaoLogin = async () => {
    if (code) {
      try {
        const serviceToken = await authApi.getServiceToken(code);
        localStorage.setItem(TOKEN, serviceToken);
        setUser({ ...user, isLoggedIn: true });
      } catch (error) {
        alert(error);
      }
    } else alert(ERROR.KAKAO_CODE);
    navigate("/");
  };

  useEffect(() => {
    kakaoLogin();
  }, []);

  return <Loading />;
};

export default Kakao;
