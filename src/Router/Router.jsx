import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Dashboard from "../Components/Dashboard/Dashboard";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Profile from "../Components/Profile/Profile";
import Tasks from "../Components/Tasks/Tasks";
import ListTasks from "../Components/ListTasks/ListTasks";
import Reviews from "../Components/Reviews/Reviews";

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
        },
        {
            path: '/reviews',
            element: <Reviews></Reviews>
        }
       
      ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/tasks',
                element: <Tasks></Tasks>
            },
            {
                path: '/dashboard/list',
                element: <ListTasks></ListTasks>
            }
        ]
    }
  ]);

export default router;