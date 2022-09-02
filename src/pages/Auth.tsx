import { authService } from "@/api";
import { userState } from "@/state/user";
import { useSetRecoilState } from "recoil";

const Auth = () => {
  const setIsLoggedIn = useSetRecoilState(userState);
  return (
    <>
      <button onClick={() => setIsLoggedIn({ auth: true })}>Login</button>
      <button onClick={() => authService.kakaoLogin()}>카카오 로그인</button>
    </>
  );
};

export default Auth;
