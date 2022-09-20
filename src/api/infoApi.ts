import fetcher from "@/api/fetcher";
import { ERROR, METHOD } from "@/constants";

const infoApi = {
  async linkUserInfo(id: string, pw: string, token: string) {
    try {
      const res = await fetcher(
        METHOD.POST,
        "info/login",
        {
          id,
          pw,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return res;
    } catch {
      throw ERROR.INFO;
    }
  },
};

export default infoApi;
