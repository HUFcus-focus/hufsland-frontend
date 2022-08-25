import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
