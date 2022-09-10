import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Kakao } from "@/components/auth";
import { userState } from "@/shared/state/user";

const Home = lazy(() => import("@/pages/Home"));
const Auth = lazy(() => import("@/pages/Auth"));

const Router = () => {
  const hasTokken = useRecoilValue(userState).token !== "";
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={hasTokken ? <Home /> : <Auth />} />
          <Route path='/auth/kakao/*' element={!hasTokken && <Kakao />}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
