import fetcher from "@/api/fetcher";
import { ERROR, METHOD, URL } from "@/constants";

const authApi = {
  async getKakaoToken(code: string) {
    const data: any = {
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_REST_API_KEY,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      code,
    };
    const queryString: any = Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURI(data[key]))
      .join("&");
    try {
      const res = await fetcher(METHOD.POST, URL.KAKAO_TOKEN, queryString, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });
      return res.data.access_token;
    } catch {
      throw ERROR.KAKAO_TOKEN;
    }
  },
  async getServiceToken(token: string) {
    try {
      const res = await fetcher(METHOD.POST, "login/oauth2/kakao", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
