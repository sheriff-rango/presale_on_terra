import React, { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const Dashboard = lazy(() => import("./components/LaunchPad"));

function App() {
  return (
    <Suspense fallback={null}>
      <Dashboard />
      <ToastContainer />
    </Suspense>
  );
}

export default App;
