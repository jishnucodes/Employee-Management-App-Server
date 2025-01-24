import { createDepartment_Mongo, deleteDepartmentById_Mongo, listDepartment_Mongo, updateDepartmentById_Mongo } from "../queries/mongoDBQueries/departmentQueries.js";

export const Department = {
    createDepartment:async(userObj)=>{
    
    return await createDepartment_Mongo(userObj);
    },
    
    updateDepartment:async(id,userObj)=>{
        return await updateDepartmentById_Mongo(id,userObj);
    },
    
    listDepartment:async()=>{
        return await listDepartment_Mongo();
    
    },
    
    deleteDepartment:async(id,userObj)=>{
        return await deleteDepartmentById_Mongo(id,userObj);
    }
    }