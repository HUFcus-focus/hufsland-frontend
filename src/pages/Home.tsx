import { logout } from "@/utils";

const Home = () => {
  return <button onClick={() => logout()}>Logout</button>;
};

export default Home;
