import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import AppLayout from "./components/AppLayout";
import GptSearch from "./pages/GptSearch";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "browse", element: <Browse /> },
      { path: "gptsearch", element: <GptSearch /> },
    ],
  },
]);
