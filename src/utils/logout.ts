import { TOKEN } from "@/constants";
import { User } from "@/types";

const logout = (user: User, setUser: (state: User) => void) => {
  localStorage.removeItem(TOKEN);
  setUser({ ...user, isLoggedIn: false });
};

export default logout;
