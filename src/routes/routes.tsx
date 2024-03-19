import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import ContactsUs from "../pages/ContactsUs";
import AdminDasboad from "../pages/admin/AdminDasboad";
import CreateStudent from "../pages/student/CreateStudent";


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
        children:[
            {
                 index:true, 
                element:<AdminDasboad/>
            },
            {
                path:'dashboard' ,
                element:<AdminDasboad/>
            },
            {
                path:'create-student' , 
                element:<CreateStudent/>
            },

        ]  
    
    }
])

export default router ;