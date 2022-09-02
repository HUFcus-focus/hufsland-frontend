import { userState } from "@/state/user";
import { useSetRecoilState } from "recoil";
import { URL } from "@/constants";

const Auth = () => {
  const setIsLoggedIn = useSetRecoilState(userState);
  return (
    <>
      <button onClick={() => setIsLoggedIn({ auth: true })}>Login</button>
      <a href={URL.KAKAO_AUTH}>카카오 로그인</a>
    </>
  );
};

export default Auth;
