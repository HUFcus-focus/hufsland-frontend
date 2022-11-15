import { Fragment, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";

import { authApi } from "@/api";
import { Kakao } from "@/components/auth";
import { Loading } from "@/components/common";
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
    if (!token) return setUser({ ...user, isLoggedIn: false });

    try {
      const res = await authApi.isTokenValid(token);

      switch (res.data.status) {
        case "OK":
          setUser({ ...user, isLoggedIn: true });
          break;
        case "RENEW": {
          const serviceToken = res.headers["authorization"].split(" ")[1];
          localStorage.setItem(TOKEN, serviceToken);
          setUser({ ...user, isLoggedIn: true });
          break;
        }
        case "EXPIRED":
          logout();
          break;
      }
    } catch (error) {
      logout();
      alert(error);
    }
  };

  useEffect(() => {
    checkStorageToken();
    addEventListener("storage", checkStorageToken);
    return () => removeEventListener("storage", checkStorageToken);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
