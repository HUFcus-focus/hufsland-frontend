import fetcher from "@/api/fetcher";
import { ERROR, METHOD } from "@/constants";

const authApi = {
  async getServiceToken(code: string) {
    try {
      const res = await fetcher(METHOD.GET, "v1/auth/kakao", {
        params: { code },
      });
      return res.headers["authorization"].split(" ")[1];
    } catch {
      throw ERROR.API;
    }
  },
  async isTokenValid(token: string) {
    try {
      const res = await fetcher(METHOD.GET, "v1/auth/token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch {
      throw ERROR.TOKEN;
    }
  },
};

export default authApi;
