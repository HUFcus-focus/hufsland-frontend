import axios from "axios";
import { URL, MESSAGE } from "@/constants/index";

axios.defaults.baseURL = URL.BASE;

const fetcher = async (
  method: "get" | "post" | "put" | "delete",
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  try {
    const res = await axios[method](url, ...rest);
    return res.data;
  } catch (error: any) {
    alert(`${MESSAGE.ALERT_API} (${error.message})`);
  }
};

export default fetcher;
