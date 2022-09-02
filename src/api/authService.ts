import { METHOD } from "@/constants/index";
import fetcher from "@/api/fetcher";

const authService = {
  kakaoLogin(code: string | null) {
    return fetcher(METHOD.GET, `/auth/kakao?code=${code}`);
  },
};

export default authService;
