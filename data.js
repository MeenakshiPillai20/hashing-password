
function getStudentData(studentId){
    if (studentId === "1"){
        return {
         name:"Meenakshi Pillai",
         age:"23",
         email:"pillai.meenakshi11@gmail.com",
         contact:"9981692504",
         course:"MERN",
         dateOfJoining:"03 July 2022"
        }
     }
     if (studentId === "2"){
         return {
          name:"Poornima KB",
          age:"22",
          email:"poornimakb@gmail.com",
          contact:"9981692504",
          course:"MERN",
          dateOfJoining:"03 July 2022"
         }
      }
      return {
        message : "student Id does not exist"
      }
    // const studentData = {
    //     name:"Meenakshi Pillai",
    //     age:"23",
    //     email:"pillai.meenakshi11@gmail.com",
    //     contact:"9981692504",
    //     course:"MERN",
    //     dateOfJoining:"03 July 2022"
    // }
    // return studentData
}
module.exports = getStudentData;