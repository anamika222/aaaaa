import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MianLayout";
import HomePages from "../Pages/HomePages";
import AboutPages from "../Pages/AboutPages";
import ToDo from "../Pages/ToDo/ToDo";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path:"/",
            element: <HomePages></HomePages>
        },
        {
            path: "/about",
            element: <AboutPages></AboutPages>
        },
        {
            path: '/todo',
            element: <ToDo></ToDo>
        }
    ],
  },
]);
export default router;