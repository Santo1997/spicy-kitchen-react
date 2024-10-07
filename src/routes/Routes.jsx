import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
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
    ],
  },
]);

export default router;
