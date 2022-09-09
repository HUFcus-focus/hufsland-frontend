import { METHOD } from "@/shared/constants/index";
import fetcher from "@/shared/api/fetcher";

const authApi = {
  getKakaoToken(code: string) {
    return fetcher(METHOD.GET, `/auth/kakao?code=${code}`);
  },
};

export default authApi;
