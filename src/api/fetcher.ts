import axios from "axios";
import { URL } from "@/constants/index";

axios.defaults.baseURL = URL.BASE;

const fetcher = async (
  method: "get" | "post" | "put" | "delete",
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;
