import "./App.css";
import { RouterProvider, useNavigation } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
