// seedRoles.js

import mongoose from 'mongoose';
// import Role from '../models/roleModel.js';
import { RoleType } from '../dbLayer/dbRoleTypeLayer.js';
// import RoleType from '../models/roleTypeModel.js';
import User from '../models/userModel.js'
import { passwordHashing } from '../utils/utility.js';
import { Role } from '../dbLayer/dbRoleLayer.js';
import { seedUsers } from './seedUser.js';

export const checkAndCreateDefaultRoles = async (req, res, next) => {
    try {
        
        const defaultRoleTypes = [
            { roleTypeName: 'admin', isAdmin: true},
            { roleTypeName: 'guest', isAdmin: false}
        ]

        for (const roleTypeData of defaultRoleTypes) {
            const existingRoleType = await RoleType.findOneRoleType(roleTypeData.roleTypeName)
            if (!existingRoleType) {
                await RoleType.createRoleType(roleTypeData)
                console.log(`Created role: ${roleTypeData.roleTypeName}`);
            }
        }

        const adminRoleType = await RoleType.findOneRoleType('admin');
        const guestRoleType = await RoleType.findOneRoleType('guest');
        
        const defaultRoles = [
            { roleName: 'admin', roleType: adminRoleType.id },
            { roleName: 'employee', roleType: null },
            
        ];
        for (const role of defaultRoles) {
            const existingRole = await Role.findOneRole(role.roleName);
            if (!existingRole) {
                await Role.createOneRole(role);
                console.log(`Created role: ${role.roleName}`);
            }
        }
        await seedUsers();
        next()
    } catch (error) {
        console.error('Error seeding roles:', error);
    } 
};

