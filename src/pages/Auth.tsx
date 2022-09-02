import { Dispatch, SetStateAction } from "react";
import { authService } from "@/api";

const Auth = ({ setIsLoggedIn }: { setIsLoggedIn: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => authService.kakaoLogin()}>카카오 로그인</button>
    </>
  );
};

export default Auth;
