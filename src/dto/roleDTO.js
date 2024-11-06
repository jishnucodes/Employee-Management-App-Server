import { buildRoleTypeDTO } from "./roleTypeDTO.js";

export const roleDTO = {
    id: '',
    roleName: '',
    roleType: null,
    active: true,
    createdOn: '',
    modifiedOn: '',
    createdBy: '',
    modifiedBy: '',
}

export const buildRoleDTO = (obj) => {
    console.log("Role Obj", obj)
    const rDTO = {...roleDTO};
    rDTO.id = obj?._id;
    rDTO.roleName = obj?.roleName;
    rDTO.roleType = obj?.roleType ? buildRoleTypeDTO(obj?.roleType) : null;
    rDTO.createdOn = obj?.createdOn;
    rDTO.modifiedOn = obj?.modifiedOn;
    rDTO.createdBy = obj?.createdBy;
    rDTO.modifiedBy = obj?.modifiedBy;

    return rDTO;
}