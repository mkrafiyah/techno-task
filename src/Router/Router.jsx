import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        }
      ]
    },
  ]);

export default router;