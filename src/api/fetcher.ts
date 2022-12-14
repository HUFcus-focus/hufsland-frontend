import axios from "axios";

import { METHOD, URL } from "@/constants";

axios.defaults.baseURL = URL.BASE;

const fetcher = async (
  method: typeof METHOD[keyof typeof METHOD],
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  const res = await axios[method](url, ...rest);
  return res;
};

export default fetcher;
