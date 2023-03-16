import { createBrowserRouter } from "react-router-dom";
import Messenger from "../Pages/Messengers/Messenger";
import Login from "../Pages/Registers/Login/Login";
import SignUp from "../Pages/Registers/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Messenger></Messenger>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);
export default router;