import { useRecoilState } from "recoil";

import { TOKEN } from "@/shared/constants";
import { userState } from "@/shared/state/user";

const Home = () => {
  const [user, setUser] = useRecoilState(userState);

  const logout = () => {
    localStorage.removeItem(TOKEN);
    setUser({ ...user, isLoggedIn: false });
  };

  return <button onClick={() => logout()}>Logout</button>;
};

export default Home;
