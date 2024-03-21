export const adminPaths2 = [
    {
      name: 'Dasboard',
      path:'/admin/dashboard' ,
      element:'CREATE_DASHBOARD'
    },
  
    {
      name:'User Management' ,
      children:[
        {
          name:'Create Admin' ,
          path:'/admin/create-admin' ,
          element:'CREATE_ADMIN'
        } ,
        {
          name:'Create faculty' ,
          path:'/admin/create-faculty' ,
          element:'CREATE_FACULTY'
        },
        {
          name:'Create student' ,
          path:'/admin/create-student' ,
          element:'CREATE_STUDENT'
        }
      ]
      
    }
  ];


const newArray = adminPaths2.reduce((acc ,item)=>{

    acc.push(item)
    return acc ;

} , [])

console.log(newArray)