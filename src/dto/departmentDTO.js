import { buildRoleDTO } from "./roleDTO.js";

export const departmentDTO = {
    id: '',
    departmentName: '',
    departmentHead: '',
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
    departmentDTOObj.departmentName = obj?.departmentName;
    departmentDTOObj.departmentHead = obj?.departmentHead;
    departmentDTOObj.description = obj?.description;
    departmentDTOObj.active = obj?.active;
    departmentDTOObj.createdOn = obj?.createdOn;
    departmentDTOObj.modifiedOn = obj?.modifiedOn;
    departmentDTOObj.createdBy = obj?.createdBy;
    departmentDTOObj.modifiedBy = obj?.modifiedBy;

    return departmentDTOObj;
}

export const buildDepartmentListDTO = (departmentList) => {
    return departmentList.map((obj) => buildDepartmentDTO(obj));
}