import axios from "axios";

import { METHOD, URL } from "@/shared/constants";

axios.defaults.baseURL = URL.BASE;

const fetcher = async (
  method: typeof METHOD[keyof typeof METHOD],
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;
