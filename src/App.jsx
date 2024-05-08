import React from "react";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Spinner from "./components/Spinner/Spinner";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Provider as AuthContext } from "./store/authContext";
import Issue from "./pages/Issue/Issue"
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <LayoutWrapper>
            <Home />
          </LayoutWrapper>
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <LayoutWrapper>
          <Login />
        </LayoutWrapper>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: (
        <LayoutWrapper>
          <Register />
        </LayoutWrapper>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/issue/:id",
      element: (
        <ProtectedRoute>
          <Issue />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      lazy: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./pages/Home/Home"));
          }, 500);
        }),
    },
    {
      path: "*/*",
      element: <ErrorPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <AuthContext>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </AuthContext>
  );
}

export default App;
