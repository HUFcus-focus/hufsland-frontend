import { useRecoilState } from "recoil";

import { userState } from "@/shared/state/user";

const Home = () => {
  const [user, setUser] = useRecoilState(userState);
  return <button onClick={() => setUser({ ...user, token: "" })}>Logout</button>;
};

export default Home;
