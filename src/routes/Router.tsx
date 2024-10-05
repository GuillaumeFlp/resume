import { createBrowserRouter } from "react-router-dom";
import { RoutePaths } from "./routes-constants";
import ErrorPage from "@/pages/error/ErrorPage";
import HomePage from "@/pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    element: <HomePage />,
  },
  {
    path: RoutePaths.DEFAULT,
    element: <ErrorPage />,
  },
]);

export default router;
