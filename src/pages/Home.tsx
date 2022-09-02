import { userState } from "@/state/user";
import { useSetRecoilState } from "recoil";

const Home = () => {
  const setIsLoggedIn = useSetRecoilState(userState);
  return <button onClick={() => setIsLoggedIn({ auth: false })}>Logout</button>;
};

export default Home;
