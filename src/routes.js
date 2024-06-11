import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

export const routes = createBrowserRouter([
  { path: "", element: <Signup /> },
  { path: "login", element: <Login /> },
  { path: "browse", element: <Browse /> },
]);
