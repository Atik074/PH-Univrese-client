import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
    {
        name:'Dashboard' ,
        path:'dashboard',
        element:<StudentDashboard/>
    },
    {
        name:'Offered course',
        ptah:'offered-course' ,
        element:<OfferedCourse/>
    }
]