import { Dispatch, SetStateAction } from "react";

const Auth = ({ setIsLoggedIn }: { setIsLoggedIn: Dispatch<SetStateAction<boolean>> }) => {
  return <button onClick={() => setIsLoggedIn(true)}>Login</button>;
};

export default Auth;
