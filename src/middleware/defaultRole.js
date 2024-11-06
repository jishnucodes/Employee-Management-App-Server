// seedRoles.js

import mongoose from 'mongoose';
import Role from '../models/roleModel.js';
import RoleType from '../models/roleTypeModel.js';
import User from '../models/userModel.js'
import { passwordHashing, seedUsers } from '../utils/utility.js';

export const checkAndCreateDefaultRoles = async (req, res, next) => {
    try {
        
        const defaultRoleTypes = [
            { roleTypeName: 'admin', isAdmin: true},
            { roleTypeName: 'guest', isAdmin: false}
        ]

        for (const roleTypeData of defaultRoleTypes) {
            const existingRoleType = await RoleType.findOne({roleTypeName: roleTypeData.roleTypeName});
            if (!existingRoleType) {
                await RoleType.create(roleTypeData)
                console.log(`Created role: ${roleTypeData.roleTypeName}`);
            }
        }

        const adminRoleType = await RoleType.findOne({roleTypeName: 'admin'});
        const guestRoleType = await RoleType.findOne({roleTypeName: 'guest'});
        
        const defaultRoles = [
            { roleName: 'admin', roleType: adminRoleType._id },
            { roleName: 'employee', roleType: null },
            
        ];
        for (const role of defaultRoles) {
            const existingRole = await Role.findOne({ roleName: role.roleName });
            if (!existingRole) {
                await Role.create(role);
                console.log(`Created role: ${role.roleName}`);
            }
        }

        await seedUsers();

        // const adminRole = await Role.findOne({roleName: 'admin'})

        // const adminUser = {
        //     username: 'Emp01',
        //     email: 'emp01@gmail.com',
        //     password: 'test',
        //     role: adminRole._id
        // }
        // const hashedPassword = await passwordHashing(adminUser.password)
        // const existingUser = await User.findOne({email: adminUser.email});
        // if (!existingUser) {
        //     await User.create({
        //         ...adminUser,
        //         password: hashedPassword
        //     });
        //     console.log('Created Admin User');

        // }
        next()
    } catch (error) {
        console.error('Error seeding roles:', error);
    } 
};

