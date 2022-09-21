import fetcher from "@/api/fetcher";
import { ERROR, METHOD } from "@/constants";
import { LinkUserInfo } from "@/types";

const infoApi = {
  async linkUserInfo({ id, pw, token }: LinkUserInfo) {
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
