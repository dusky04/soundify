import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProps,
  RouterProvider,
  Router,
  RouterProviderProps,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./routes/loginPage/LoginPage.tsx";
import MusicPlayer from "./routes/musicPlayerPage/MusicPlayer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/player",
    element: <MusicPlayer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
