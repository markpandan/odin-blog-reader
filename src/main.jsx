import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Login from "./routes/login.jsx";
import Signup from "./routes/signup.jsx";
import Post from "./routes/post.jsx";
import { AuthProvider } from "./utils/authUtils.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "posts/:postId",
        element: <Post />,
      },
    ],
  },
]);

export const AuthContext = createContext({
  token: localStorage.getItem("token"),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
