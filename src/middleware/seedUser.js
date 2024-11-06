import { Role } from '../dbLayer/dbRoleLayer.js';
import {User} from '../dbLayer/dbUserLayer.js'

export const seedUsers = async () => {
    try {
       const roleCounts = await Role.roleCount()
       const adminRole = roleCounts > 0 ? await Role.findOneRole('admin') : null
       console.log(adminRole)
       const defaultUsers = [
          { username: 'Emp001', email: 'emp@gmail.com', password: 'test', role: adminRole ? adminRole.id : null},
       ];
 
       for (const user of defaultUsers) {
          const existingUser = await User.findOneUser( user.email);
          if (!existingUser) {
             const hashedPassword = await passwordHashing(user.password);
             const userObj = {...user}
             userObj.password = hashedPassword;
             await User.createNewUser(userObj)
          } else {
             console.log(`User already exists: ${user.username}`);
         }
       }
    } catch (error) {
       console.error('Error seeding users:', error);
   }
 }