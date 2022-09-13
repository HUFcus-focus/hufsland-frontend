import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Kakao } from "@/components/auth";
import { userState } from "@/shared/state/user";

const Home = lazy(() => import("@/pages/Home"));
const Auth = lazy(() => import("@/pages/Auth"));

const Router = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const checkToken = () => {
      setUser({ ...user, isLoggedIn: Boolean(localStorage.getItem("user")) });
    };
    addEventListener("storage", checkToken);
    checkToken();
    return () => {
      removeEventListener("storage", checkToken);
    };
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={user.isLoggedIn ? <Home /> : <Auth />} />
          <Route path='/auth/kakao/*' element={!user.isLoggedIn && <Kakao />}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
