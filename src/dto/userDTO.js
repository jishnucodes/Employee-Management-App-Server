import { buildRoleDTO } from "./roleDTO.js";

export const userDTO = {
    id: '',
    username: '',
    email: '',
    password: '',
    role: '',
    active: true,
    createdOn: Date.now(),
    modifiedOn: Date.now(),
    createdBy: '',
    modifiedBy: ''
}

export const buildUserDTO = (obj) => {
    console.log("buildUserDTO", obj);
    const userDTOObj = {...userDTO};
    userDTOObj.id = obj?._id;
    userDTOObj.username = obj?.username;
    userDTOObj.email = obj?.email;
    userDTOObj.password = obj?.password;
    userDTOObj.role = obj?.role ? buildRoleDTO(obj?.role) : null;
    userDTOObj.active = obj?.active;
    userDTOObj.createdOn = obj?.createdOn;
    userDTOObj.modifiedOn = obj?.modifiedOn;
    userDTOObj.createdBy = obj?.createdBy;
    userDTOObj.modifiedBy = obj?.modifiedBy;


    return userDTOObj;
}

