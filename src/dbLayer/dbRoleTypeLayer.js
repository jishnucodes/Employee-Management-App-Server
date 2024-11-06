import { findOneRoleType_Mongo, createRoleType_Mongo } from "../queries/mongoDBQueries/roleTypeQueries.js";

export const RoleType = {
    findOneRoleType: async (roleTypeName) => {
        return await findOneRoleType_Mongo(roleTypeName);
    },
    createRoleType: async (roleTypeData) => {
        return await createRoleType_Mongo(roleTypeData);
    }
}