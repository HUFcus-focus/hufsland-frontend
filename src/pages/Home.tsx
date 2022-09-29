import { useRecoilState } from "recoil";

import { userState } from "@/state/user";
import { logout } from "@/utils";

const Home = () => {
  const [user, setUser] = useRecoilState(userState);
  return <button onClick={() => logout(user, setUser)}>Logout</button>;
};

export default Home;
