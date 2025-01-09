import { 
    createNewUser_Mongo, 
    findOneUser_Mongo,
    findUserById_Mongo,
    findAllUsers_Mongo,
    findByIdAndUpdateUser_Mongo,
    findByIdAndDeleteUser_Mongo,
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
    },
    findAllUsers: async () => {
        return await findAllUsers_Mongo()
    },
    findByIdAndUpdateUser: async (userId, updateObj) => {
        return await findByIdAndUpdateUser_Mongo(userId, updateObj) 
    },
    findByIdAndDeleteUser: async (userId) => {
        return await findByIdAndDeleteUser_Mongo(userId)
    }

}
