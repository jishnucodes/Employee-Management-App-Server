import Department from '../../models/departmentModel'
const createDepartment_Mongo = async (userObj) => {
     const department = new Department(userObj)
     await department.save()
        if (department) {
            const response = department;
            return response;
        }else {
            return;
        }
}

const updateDepartmentById_Mongo = async (id,userObj) => {
    Department.findByIdAndUpdate({_id:id},userObj,{new:true})
}

const listDepartment_Mongo = async () => {
    Department.find({})
}

const deleteDepartmentById_Mongo = async (id,userObj) => {
    Department.findByIdAndDelete({_id:id},userObj,{new:true})
}

export {createDepartment_Mongo,updateDepartmentById_Mongo,listDepartment_Mongo,deleteDepartmentById_Mongo}