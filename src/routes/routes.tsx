import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import ContactsUs from "../pages/ContactsUs";
import routeGenerator from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./student.routes";


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
        children:routeGenerator(adminPaths)
    },
    {
      path:'/faculty' ,
      element:<App/> ,
      children:routeGenerator(facultyPaths)  
    },
    {
      path:'/student' ,
      element:<App/> ,
      children:routeGenerator(studentPaths) 
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