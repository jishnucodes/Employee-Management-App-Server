import { Role } from "../dbLayer/dbRoleLayer.js";

const getAllRoles = async (req, res) => {       
    try {
        const roles = await Role.findAllRoles();
        return res.status(200).json({
            success: true,
            responseObject: roles,
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}


export { 
    getAllRoles 
};