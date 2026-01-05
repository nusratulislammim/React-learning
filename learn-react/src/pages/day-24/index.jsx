import { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function Day24() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Home />
      <About />
    </Suspense>
  );
}

export default Day24;
