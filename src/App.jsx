import { useState, useEffect } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch/useFetch";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Spinner from "./components/Spinner/Spinner";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const { state } = useFetch("issues", []);

  useEffect(() => {
    console.log({ state });
  }, [state]);

  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<Spinner />} />;
}

export default App;
