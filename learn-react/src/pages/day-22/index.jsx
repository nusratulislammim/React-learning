import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function Day22() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default Day22;
