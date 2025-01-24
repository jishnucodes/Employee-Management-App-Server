import Department from '../../models/departmentModel.js'
import { buildDepartmentDTO, buildDepartmentListDTO } from '../../dto/departmentDTO.js'
const createDepartment_Mongo = async (userObj) => {
   try{ 
     const department = new Department(userObj)
     await department.save()
        if (department) {
            const response = buildDepartmentDTO(department);
            return response;
        }else {
            return;
        }
    }
    catch(error){
        console.log(error);
    }
   
}

const updateDepartmentById_Mongo = async (id,userObj) => {
try{
    const department = await Department.findByIdAndUpdate(id,userObj,{new:true});
    if(department)
    {
        const response = buildDepartmentDTO(department);
        return response
    }
    else{
        return
    }
   }
catch(error){
    console.log(error)
}
}

const listDepartment_Mongo = async () => {
try{
    const departments = await(  Department.find({}));
    if(departments)
    {
    const response = buildDepartmentListDTO(departments);
    return(response)
    }
    else{
        return
    }
   }
   catch(error){
    console.log(error)
   }
}

const deleteDepartmentById_Mongo = async (id,userObj) => {
try{
    Department.findByIdAndDelete({_id:id},userObj,{new:true})
    const response = true;
    return response;
   }
catch(error){
    console.log(error)
}
}

export {createDepartment_Mongo,updateDepartmentById_Mongo,listDepartment_Mongo,deleteDepartmentById_Mongo}