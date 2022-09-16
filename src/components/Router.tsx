import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Kakao } from "@/components/auth";
import { PATH, USER } from "@/shared/constants";
import { userState } from "@/shared/state/user";

const Home = lazy(() => import("@/pages/Home"));
const Auth = lazy(() => import("@/pages/Auth"));

const Router = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const checkLocalStorage = () => {
      setUser({ ...user, isLoggedIn: Boolean(localStorage.getItem(USER)) });
    };
    addEventListener("storage", checkLocalStorage);
    checkLocalStorage();
    return () => {
      removeEventListener("storage", checkLocalStorage);
    };
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={`${PATH.HOME}`} element={user.isLoggedIn ? <Home /> : <Auth />} />
          <Route path={`${PATH.KAKAO}`} element={!user.isLoggedIn && <Kakao />}></Route>
          <Route path={`${PATH.ALL}`} element={<Navigate to={`${PATH.HOME}`} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
