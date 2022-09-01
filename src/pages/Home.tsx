import { Dispatch, SetStateAction } from "react";

const Home = ({ setIsLoggedIn }: { setIsLoggedIn: Dispatch<SetStateAction<boolean>> }) => {
  return <button onClick={() => setIsLoggedIn(false)}>Logout</button>;
};

export default Home;
