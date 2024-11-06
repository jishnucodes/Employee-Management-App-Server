import { buildRoleDTO } from "../../dto/roleDTO.js";
import Role from "../../models/roleModel.js";

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
    findOneRole_Mongo,
    createOneRole_Mongo,
    roleCount_Mongo
}