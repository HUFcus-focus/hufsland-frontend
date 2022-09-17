import fetcher from "@/shared/api/fetcher";
import { ERROR, METHOD } from "@/shared/constants";

const infoApi = {
  async linkUserInfo(id: string, pw: string, token: string) {
    try {
      const res = await fetcher(
        METHOD.POST,
        "info/login",
        {
          id: id,
          pw: pw,
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
