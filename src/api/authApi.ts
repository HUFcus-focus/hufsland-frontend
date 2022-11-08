import fetcher from "@/api/fetcher";
import { ERROR, METHOD } from "@/constants";

const authApi = {
  async getServiceToken(code: string) {
    try {
      const res = await fetcher(METHOD.GET, "login/oauth2/kakao", {
        params: { code },
      });
      return res.headers["Authorization"].split(" ")[1];
    } catch {
      throw ERROR.API;
    }
  },
  async isTokenValid(token: string) {
    try {
      const res = await fetcher(METHOD.GET, "api/token/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.status;
    } catch {
      throw ERROR.TOKEN;
    }
  },
};

export default authApi;
