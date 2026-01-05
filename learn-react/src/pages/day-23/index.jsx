import { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function Day23() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <LazyComponent />
    </Suspense>
  );
}

export default Day23;
