import { 
    findOneRole_Mongo, 
    createOneRole_Mongo, 
    roleCount_Mongo, 
    findOneRole_Mongo_byId, 
    findAllRoles_Mongo } from "../queries/mongoDBQueries/roleQueries.js";

export const Role = {
    findAllRoles: async () => { 
        return await findAllRoles_Mongo();
    },
    findOneRole: async (roleName) => {
        return await findOneRole_Mongo(roleName);
    },
    findOneRoleById: async (roleId) => {
        return await findOneRole_Mongo_byId(roleId);
    },
    createOneRole: async (roleData) => {
        return await createOneRole_Mongo(roleData);
    },
    roleCount: async () => {
        return await roleCount_Mongo()
    }
}