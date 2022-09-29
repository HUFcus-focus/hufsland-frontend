import { Fragment, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";

import { authApi } from "@/api";
import { Kakao } from "@/components/auth";
import { PATH, TOKEN } from "@/constants";
import { userState } from "@/state/user";
import { logout } from "@/utils";

const Home = lazy(() => import("@/pages/Home"));
const Auth = lazy(() => import("@/pages/Auth"));
const Info = lazy(() => import("@/pages/Info"));

const Router = () => {
  const [user, setUser] = useRecoilState(userState);

  const checkStorageToken = async () => {
    const token = localStorage.getItem(TOKEN);
    if (!token) setUser({ ...user, isLoggedIn: false });
    else
      try {
        // TODO: 로그인 상태 관리
        const res = await authApi.isTokenValid(token);
        console.log(res);
      } catch (error) {
        logout(user, setUser);
        alert(error);
      }
  };

  // localStorage의 모든 변화를 감지
  useEffect(() => {
    addEventListener("storage", checkStorageToken);
    checkStorageToken();
    return () => removeEventListener("storage", checkStorageToken);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          {user.isLoggedIn ? (
            <Fragment>
              <Route path={PATH.HOME} element={<Home />} />
              <Route path={PATH.INFO} element={<Info />} />
            </Fragment>
          ) : (
            <Fragment>
              <Route path={PATH.HOME} element={<Auth />} />
              <Route path={PATH.KAKAO} element={<Kakao />} />
            </Fragment>
          )}
          <Route path={PATH.ALL} element={<Navigate to={PATH.HOME} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
