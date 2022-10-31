import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingBox } from "./components";
import NotFound from "./screens/NotFount";

const Application = () => {

  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingBox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Application;
