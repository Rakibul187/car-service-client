import Main from "../../layout/Main";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../pages/Home/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Signup></Signup>
            }
        ]
    }
])