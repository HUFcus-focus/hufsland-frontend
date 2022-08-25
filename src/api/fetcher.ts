import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

const fetcher = async (
  method: "get" | "post" | "put" | "delete",
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;
