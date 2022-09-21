import fetcher from "@/api/fetcher";
import { ERROR, METHOD } from "@/constants";
import { LinkUserInfoParams } from "@/types";

const infoApi = {
  async linkUserInfo({ id, pw, token }: LinkUserInfoParams) {
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
