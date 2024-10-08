import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Menu from "../components/pages/Menu";
import Gallaries from "../components/pages/Gallaries";
// import Error from "../components/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/gallary",
        element: <Gallaries />,
      },
    ],
  },
]);

export default router;
