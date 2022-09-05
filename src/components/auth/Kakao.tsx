import { authService } from "@/shared/api";
import { userState } from "@/shared/state/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const Kakao = () => {
  const code = new URL(document.URL).searchParams.get("code") as string;
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const getToken = async () => {
    const token: string = await authService.kakaoLogin(code);
    setUser({ ...user, token: token });
    navigate("/");
  };

  useEffect(() => {
    getToken();
  }, []);

  return <>Loading...</>;
};

export default Kakao;
