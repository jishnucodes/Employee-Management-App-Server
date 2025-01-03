import { Role } from "../dbLayer/dbRoleLayer.js";
import {User} from "../dbLayer/dbUserLayer.js";
import { buildUserDTO, userDTO } from "../dto/userDTO.js";
import { enumObj } from "../utils/enumObj.js";
import generateAccessToken, { hashedPasswordComparing, passwordHashing } from "../utils/utility.js";

const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const userExist = await User.findOneUser(email);
        console.log("hitting")
        if (userExist) {
            return res.status(400).json({
                status: false,
                message: "user already exist."
            })
        }
        const hashedPassword = await passwordHashing(password);
        const createdBy = req.user ? req.user : 'admin';
        let userObj = {...userDTO};
        userObj.id = '';
        userObj.username = username;
        userObj.email = email;
        userObj.password = hashedPassword;
        userObj.createdBy = createdBy;
        userObj.modifiedBy = createdBy;

        const userDTOObj = buildUserDTO(userObj);
        const newUser = await User.createNewUser(userDTOObj);
        if (!newUser) {
            return res.status(400).json({
                status: false,
                message: "user creation failed",
            })
        }
        res.status(201).json({
            status: true,
            message: "Successfuly created user"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            message: "Something went wrong. please try again"
        })
    }
}

const signin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOneUser(email);
        if (!userExist) {
            return res.status(400).json({
                status: false,
                message: "Please signup"
            })
        }
        console.log("user exist", userExist)
        const isPasswordMatch = await hashedPasswordComparing(password, userExist.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                status: false,
                message: "Invalid password"
            });
        }
        const token = generateAccessToken(userExist);

        res.cookie(enumObj.auth_token, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === enumObj.env_production,
            sameSite: 'none',
            maxAge: 24 * 60 * 60 * 1000,

        })
        userExist.password = undefined;

        res.status(200).json({
            status: true,
            responseObject: userExist
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            error: "Something went wrong. please try again"
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findUserById(id);
        if (!user) {
            return res.status(400).json({
                status: false,
                message: "user is not existing"
            })
        }
        
        res.status(200).json({
            status: true,
            responseObject: user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            error: "Something went wrong. please try again"
        })
    }
}

const userInsertion = async (req, res) => {
    try {
        const {username, email, password, role, active} = req.body;

        const userExist = await User.findOneUser(email);
        console.log("hitting")
        if (userExist) {
            return res.status(400).json({
                status: false,
                message: "user already exist."
            })
        }
        console.log("user exist on insertion", userExist)
        const hashedPassword = await passwordHashing(password);
        console.log("req.user = ", req.user)
        const createdBy = req.user ? req.user.id : 'admin';

        const existingRole = await Role.findOneRoleById(role);
        console.log("existing role", role)
        if (!existingRole) {
            console.log("role is not existing")
            return res.status(400).json({
                status: false,
                message: "role is not existing"
            })
        }
        let userObj = {...userDTO};
        userObj.id = '';
        userObj.username = username;
        userObj.email = email;
        userObj.role = existingRole ? existingRole.id : '';
        userObj.password = hashedPassword;
        userObj.active = active;
        userObj.createdBy = createdBy;
        userObj.modifiedBy = createdBy;

        // const userDTOObj = buildUserDTO(userObj);
        const newUser = await User.createNewUser(userObj);
        if (!newUser) {
            return res.status(400).json({
                status: false,
                message: "user creation failed",
            })
        }
        res.status(201).json({
            status: true,
            responseObject: newUser,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            message: "Something went wrong. please try again"
        })
    }
}


export {
    signup, 
    signin,
    getUserById,
    userInsertion
}