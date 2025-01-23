import { buildRoleDTO, buildRoleListDTO } from "../../dto/roleDTO.js";
import Role from "../../models/roleModel.js";


const findAllRoles_Mongo = async () => {
    try {
        const roles = await Role.find().populate('roleType').exec();    
        if (roles) {
            const response = buildRoleListDTO(roles);
            return response;
        }else{
            return;
        }
    } catch (error) {
        console.log("MongoDB error in finding all roles", error)
    }
};

const findOneRole_Mongo = async (roleName) => {
    try {
        const existingRole = await Role.findOne({ roleName: roleName }).populate('roleType').exec();
        if (existingRole) {
            const response = buildRoleDTO(existingRole);
            return response;
        }else{
            return;
        }
    } catch (error) {
        console.log("MongoDB error in finding one role", error)
    }
};

const findOneRole_Mongo_byId = async (roleId) => {
    try {
        const existingRole = await Role.findById(roleId).populate('roleType').exec();
        if (existingRole) {
            const response = buildRoleDTO(existingRole);
            console.log("response", response);
            return response;
        }else{
            return;
        }
    } catch (error) {
        console.log("MongoDB error in finding one role by id", error)
    }
};

const createOneRole_Mongo = async (roleData) => {
    try {
        const newRole = await Role.create(roleData);
        if (newRole) {
            const response = buildRoleDTO(newRole);
            return response;
        }else{
            return;
        }
    } catch (error) {
        console.log("MongoDB error in creating a new role", error)
    }
}

const roleCount_Mongo = async () => {
    const count = Role.countDocuments();
    return count;
}

export {
    findAllRoles_Mongo,
    findOneRole_Mongo,
    createOneRole_Mongo,
    roleCount_Mongo,
    findOneRole_Mongo_byId
}