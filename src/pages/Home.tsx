import { userState } from "@/state/user";
import { useRecoilState } from "recoil";

const Home = () => {
  const [user, setUser] = useRecoilState(userState);
  return <button onClick={() => setUser({ ...user, token: "" })}>Logout</button>;
};

export default Home;
