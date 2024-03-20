import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import ContactsUs from "../pages/ContactsUs";
import { adminPaths } from "./admin.routes";


const router = createBrowserRouter([
    {
        path: '/', // relative path
        element:<App/>,
        children:[
            {
                path:'about' , // absolute path ,don't use slash
                element:<AboutUs/>
            }  ,
            {
                path:'contact' , // absolute path
                element:<ContactsUs/>
            }
        ]
    },
    
    {
        path: '/admin', // relative path
        element:<App/>,
        children:adminPaths
    },
    {
      path:'/faculty' ,
      element:<App/> ,
      children:adminPaths  
    },
    {
      path:'/student' ,
      element:<App/> ,
      children:adminPaths  
    },

    {
        path:'/login' ,
        element:<p>hi login</p>
    },
    {
        path:'/register',
        element:<p>Hi register page</p>
    }
])

export default router ;