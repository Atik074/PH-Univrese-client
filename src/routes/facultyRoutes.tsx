import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
    {
        name:'Dashboard' ,
        path:'dashboard',
        element:<FacultyDashboard/>
    },
    {
        name:'Offered course',
        ptah:'offered-course' ,
        element:<OfferedCourse/>
    }
]