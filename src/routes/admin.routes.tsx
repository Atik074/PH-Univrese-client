import { ReactNode } from "react";
import AdminDasboad from "../pages/admin/AdminDasboad";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

export type TRoute = {
  path:string ,
  element: ReactNode
}

type TSidebarItem ={
  key:string ,
  label:ReactNode,
  children?:TSidebarItem[]
}


export const adminPaths= [
  {
    name: 'Dasboard',
    path:'dashboard' ,
    element:<AdminDasboad/>
  },

  {
    name:'User Management' ,
    children:[
      {
        name:'Create Admin' ,
        path:'create-admin' ,
        element:<CreateAdmin/>
      } ,
      {
        name:'Create faculty' ,
        path:'create-faculty' ,
        element:<CreateFaculty/>
      },
      {
        name:'Create student' ,
        path:'create-student' ,
        element:<CreateStudent/>
      }
    ]
    
  }
];

// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDasboad />,
//   },

//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,

//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];

////////////

export const adminSidebarItems = adminPaths.reduce((acc:TSidebarItem[] ,item)=>{
       
  if(item.path && item.element){
    acc.push({
      key: item.name,
      label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
    })
   
  }

  if(item.children){
      acc.push({
         key:item.name ,
         label:item.name ,
         children: item.children.map((child)=>({
          key:child.name ,
          label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
         }))

      })
       
  }

    return acc ;

} , [])

 console.log(JSON.stringify(adminSidebarItems))
/////////

// export const adminRoutes = adminPaths.reduce((acc:TRoute[] ,item)=>{
       
//   if(item.path && item.element){
//     acc.push({
//       path: item.path ,
//       element: item.element
//     })
   
//   }

//   if(item.children){
//         item.children.forEach((child)=>{
//           acc.push({
//             path:child.path ,
//             element:child.element
//           })
//         })
//   }

//     return acc ;

// } , [])

