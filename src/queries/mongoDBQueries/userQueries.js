import { buildUserDTO } from "../../dto/userDTO.js";
import User from "../../models/userModel.js";

const findOneUser_Mongo = async (email) => {
    const user =  await User.findOne({email: email}).populate('role').exec();
    if (user) {
        const response = buildUserDTO(user);
        return response;
    }else {
        return;
    }
}

const createNewUser_Mongo = async (userObj) => {
    console.log("second hitting")
    const user = new User(userObj)
    console.log("user", user)
    await user.save()
    if (user) {
        const response = buildUserDTO(user);
        return response;
    }else {
        return;
    }
}

const findUserById_Mongo = async (userId) => {
    try {
        const user = await User.findById(userId).populate("role").exec();
        if (user) {
            const response = buildUserDTO(user);
            return response;
        }else{
            return;
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    findOneUser_Mongo,
    createNewUser_Mongo,
    findUserById_Mongo
}