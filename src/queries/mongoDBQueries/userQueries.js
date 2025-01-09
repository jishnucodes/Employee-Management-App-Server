import { buildUserDTO, buildUserListDTO } from "../../dto/userDTO.js";
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
    let user = new User(userObj)
    console.log("user", user)
    await user.save()

    user = await User.findById(user._id).populate('role');
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

const findByIdAndUpdateUser_Mongo = async (userId, updateObj) => {
    console.log("updateObj", updateObj)
    console.log("userId", userId)
    try {
        const user = await User.findByIdAndUpdate(userId, updateObj, { new: true }).populate("role").exec();
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

const findAllUsers_Mongo = async () => {
    try {
        const users = await User.find({}).populate("role").exec();
        console.log("users", users)
        const response = buildUserListDTO(users)
        return response;
    } catch (error) {
        console.log(error);
    }
}

const findByIdAndDeleteUser_Mongo = async (userId) => {       
    try {
        const user = await User.findByIdAndDelete({_id: userId}).exec();
        if (user) {
            return true;
            }else{
                return false;
            }
    } catch (error) {
        console.log(error);
    }
}

export {
    findOneUser_Mongo,
    createNewUser_Mongo,
    findUserById_Mongo,
    findAllUsers_Mongo,
    findByIdAndUpdateUser_Mongo,
    findByIdAndDeleteUser_Mongo
}