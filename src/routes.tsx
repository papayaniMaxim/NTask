import { Navigate, RouteProps } from "react-router-dom";
import UserForm from "./components/UserForm/UserForm";
import GalleryPage from "./pages/GalleryPage";
import UsersPage from "./pages/UsersPage";

const routes:CustomRouteProps[] = [
    {
        name: "Пользователи",
        path: "/users",
        element: <UsersPage/>,
    },
    {
        name: "Галлерея",
        path: "/gallery",
        element: <GalleryPage/>,
    },
    {
        name: null,
        path: "/users/update/:id",
        element: <UserForm type="update"/>
    },
    {
        name: null,
        path: "/users/create",
        element: <UserForm type="create"/>
    },
    {
        name: null,
        path: "*",
        element: <Navigate to={"/users"} replace={true} />
    }
]

export type CustomRouteProps = RouteProps & {
    name: string | null;
  };
  
export default routes
