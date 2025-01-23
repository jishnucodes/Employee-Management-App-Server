import { createEmployee_Mongo,
    updateEmployeeById_Mongo,
    listEmployee_Mongo,
deleteEmployeeById_Mongo } from "../queries/mongoDBQueries/employeeQueries";


export const employee = {
createEmployee:async(userObj)=>{

return await createEmployee_Mongo(userObj);
},

updateEmployee:async(id,userObj)=>{
    return await updateEmployeeById_Mongo(id,userObj);
},

listEmployee:async()=>{
    return await listEmployee_Mongo();

},

deleteEmployee:async(id,userObj)=>{
    return await deleteEmployeeById_Mongo(id,userObj);
}
}