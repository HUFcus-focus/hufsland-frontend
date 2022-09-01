import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Auth = lazy(() => import("@/pages/Auth"));

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route
            path='/'
            element={
              isLoggedIn ? (
                <Home setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Auth setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
