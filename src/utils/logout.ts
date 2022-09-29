import { TOKEN } from "@/constants";

const logout = () => {
  localStorage.removeItem(TOKEN);
  location.reload();
};

export default logout;
