import { authService } from "@/api";
import { userState } from "@/state/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const Kakao = () => {
  const code = new URL(document.URL).searchParams.get("code");
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();

  const getToken = async () => {
    const token = await authService.kakaoLogin(code);
    setUserState({ auth: true, token: token });
    navigate("/");
  };

  useEffect(() => {
    getToken();
  }, []);

  return <>Kakao</>;
};

export default Kakao;
