import { buildRoleTypeDTO } from "../../dto/roleTypeDTO.js";
import RoleType from "../../models/roleTypeModel.js";

const findOneRoleType_Mongo = async (roleTypeName) => {
    try {
        const existingRoleType = await RoleType.findOne({ roleTypeName: roleTypeName });

        if (existingRoleType) {
            const response = buildRoleTypeDTO(existingRoleType);
            return response;
        } else {
            return;
        }
    } catch (error) {
           console.log("MongoDB error in finding one roleType", error);
    }

}

const createRoleType_Mongo = async (roleTypeData) => {
    try {
        const newRoleType = await RoleType.create(roleTypeData);
        if (newRoleType) {
            const response = buildRoleTypeDTO(newRoleType);
            return response;
        }else{
            return;
        }
    } catch (error) {
        console.log("MongoDB error in creating new roleType", error);
    }
}

export {
    findOneRoleType_Mongo,
    createRoleType_Mongo
}