import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import AuthPage from "./pages/AuthPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "/auth", element: <AuthPage /> },
  { path: "*", element: <PageNotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
