import fetcher from "@/shared/api/fetcher";
import { METHOD } from "@/shared/constants/index";

const authApi = {
  getKakaoToken(code: string) {
    return fetcher(METHOD.GET, `/auth/kakao?code=${code}`);
  },
};

export default authApi;
