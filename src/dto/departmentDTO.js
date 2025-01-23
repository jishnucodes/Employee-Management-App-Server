import { buildRoleDTO } from "./roleDTO.js";

export const departmentDTO = {
    id: '',
    departmentname: '',
    departmenthead: '',
    description: '',
    active: true,
    createdOn: Date.now(),
    modifiedOn: Date.now(),
    createdBy: '',
    modifiedBy: ''
}

export const buildDepartmentDTO = (obj) => {
    
    const departmentDTOObj = {...departmentDTO};
    departmentDTOObj.id = obj?._id;
    departmentDTOObj.departmentname = obj?.departmentname;
    departmentDTOObj.departmenthead = obj?.departmenthead;
    departmentDTOObj.description = obj?.description;
    departmentDTOObj.active = obj?.active;
    departmentDTOObj.createdOn = obj?.createdOn;
    departmentDTOObj.modifiedOn = obj?.modifiedOn;
    departmentDTOObj.createdBy = obj?.createdBy;
    departmentDTOObj.modifiedBy = obj?.modifiedBy;

    return departmentDTOObj;
}