export const adminPaths2 = [
    {
      name: 'Dasboard',
      path:'dashboard' ,
      element:'CREATE_DASHBOARD'
    },
  
    {
      name:'User Management' ,
      children:[
        {
          name:'Create Admin' ,
          path:'create-admin' ,
          element:'CREATE_ADMIN'
        } ,
        {
          name:'Create faculty' ,
          path:'create-faculty' ,
          element:'CREATE_FACULTY'
        },
        {
          name:'Create student' ,
          path:'create-student' ,
          element:'CREATE_STUDENT'
        }
      ]
      
    }
  ];


const newArray = adminPaths2.reduce((acc ,item)=>{
       
  if(item.path && item.element){
    acc.push({
      key: item.path ,
      label: "NavLink"
    })
   
  }

  if(item.children){
        item.children.forEach((child)=>{
          acc.push({
            key:child.path ,
            label:child.element ,
            children: item.children.map((child)=>({
                key:child.name ,
                element: "NavLink"
            }))
          })
        })
  }

    return acc ;

} , [])

console.log(JSON.stringify(newArray))