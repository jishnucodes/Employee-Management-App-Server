import { departmentDTO } from "../dto/departmentDTO";

const createDepartment = async (req, res) => {
    try{
        const {departmentname,departmenthead,description,active} = req.body;
        const createdBy = req.user ? req.user : 'admin';
        let departmentObj = {...departmentDTO};
        departmentObj.departmentname = departmentname;
        departmentObj.



    }
    catch{

    }
}
