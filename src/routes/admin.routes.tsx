import AdminDasboad from "../pages/admin/AdminDasboad";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths2 = [
  {
    name: 'Dasboard',
    path:'/admin/dashboard' ,
    element:<AdminDasboad/>
  },

  {
    name:'User Management' ,
    children:[
      {
        name:'Create Admin' ,
        path:'/admin/create-admin' ,
        element:<CreateAdmin/>
      } ,
      {
        name:'Create faculty' ,
        path:'/admin/create-faculty' ,
        element:<CreateFaculty/>
      },
      {
        name:'Create student' ,
        path:'/admin/create-student' ,
        element:<CreateStudent/>
      }
    ]
    
  }
];

export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDasboad />,
  },

  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,

  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
];
