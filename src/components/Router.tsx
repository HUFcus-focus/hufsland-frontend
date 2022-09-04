import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/state/user";
import { Kakao } from "@/components/auth";

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
