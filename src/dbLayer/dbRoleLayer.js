import { findOneRole_Mongo, createOneRole_Mongo, roleCount_Mongo } from "../queries/mongoDBQueries/roleQueries.js";

export const Role = {
    findOneRole: async (roleName) => {
        return await findOneRole_Mongo(roleName);
    },
    createOneRole: async (roleData) => {
        return await createOneRole_Mongo(roleData);
    },
    roleCount: async () => {
        return await roleCount_Mongo()
    }
}