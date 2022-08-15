import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingBox from "./components/Layout/LoadingBox";

const Application = () => {

  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
      </BrowserRouter>
    </Suspense>

  )
}

export default Application;
