import { 
    createNewUser_Mongo, 
    findOneUser_Mongo,
    findUserById_Mongo 
} from "../queries/mongoDBQueries/userQueries.js"

export const User = {
    findOneUser: async (email) => {
        return await findOneUser_Mongo(email);
    },
    createNewUser: async (userObj) => {
        return await createNewUser_Mongo(userObj)
    },
    findUserById: async (userId) => {
        return await findUserById_Mongo(userId)
    }
}
