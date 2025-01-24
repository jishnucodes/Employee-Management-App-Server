import { departmentDTO } from "../dto/departmentDTO.js";
import {Department} from "../dbLayer/dbDepartmentLayer.js"

export const createDepartment = async (req, res) => {
    try{
        const {departmentName,departmentHead,description,active} = req.body;
        const createdBy = req.user ? req.user.id : 'admin';
        let departmentObj = {...departmentDTO};
        departmentObj.departmentName = departmentName;
        departmentObj.departmentHead = departmentHead;
        departmentObj.description = description;
        departmentObj.active = active;
        departmentObj.createdBy = createdBy;
        departmentObj.modifiedBy = createdBy;
       const newDepartment = await Department.createDepartment(departmentObj);
       if(!newDepartment){
        return res.status(400).json({
            status: false,
            message: "Department creation failed",
        })
       }
       res.status(201).json({
        status: true,
        responseObject: newDepartment,
    })


    }
    catch(error){
        console.log(error)
        res.status(500).json({
            status: false,
            message: "Something went wrong. please try again"
        })

    }
}


export const updateDepartment = async (req, res) => {
    try{
        const {departmentName,departmentHead,description,active} = req.body;
        const {id} = req.params;
        
       const updatedDepartment = await Department.updateDepartment(id,{departmentName,departmentHead,description,active});
       if(!updatedDepartment){
        return res.status(400).json({
            status: false,
            message: "Department updation failed",
        })
       }
       res.status(201).json({
        status: true,
        responseObject: updatedDepartment ,
    })


    }
    catch(error){
        console.log(error)
        res.status(500).json({
            status: false,
            message: "Something went wrong. please try again"
        })

    }
}

export const deleteDepartment = async (req, res) => {
    try{
        const id = req.params;
        const departmentDeleated = await Department.deleteDepartment(id);
        if(!departmentDeleated){
            return res.status(400).json({
                status: false,
                message: "Department deletion failed",
            })
           }
           res.status(201).json({
            status: true,
            message:"Department deleted successfully" ,
        })
    
    
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                status: false,
                message: "Something went wrong. please try again"
            })
    
        }    
        
}


export const getAllDepartment = async (req, res) => {
    try{
        const departmentList = await Department.listDepartment();
        if(!departmentList){
            return res.status(400).json({
                status: false,
                message: "No Department Found",
            })
           }
           res.status(201).json({
            status: true,
            responseObject:departmentList ,
        })
    
    
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                status: false,
                message: "Something went wrong. please try again"
            })
    
        }     

   
}