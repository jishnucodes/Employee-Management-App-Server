import Employee from '../../models/employeeModel.js'
const createEmployee_Mongo = async (userObj) => {
     const employee = new Employee(userObj)
     await employee.save()
        if (employee) {
            const response = employee;
            return response;
        }else {
            return;
        }
}

const updateEmployeeById_Mongo = async (id,userObj) => {
    Employee.findByIdAndUpdate({_id:id},userObj,{new:true})
}

const listEmployee_Mongo = async () => {
    Employee.find({})
}

const deleteEmployeeById_Mongo = async (id,userObj) => {
    Employee.findByIdAndDelete({_id:id},userObj,{new:true})
}

export {createEmployee_Mongo,updateEmployeeById_Mongo,listEmployee_Mongo,deleteEmployeeById_Mongo}