import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Role from '../models/roleModel.js';
import User from '../models/userModel.js';

export default function generateAccessToken(user) {
    return jwt.sign({id: user.id, username: user.username}, process.env.TOKEN_SECRET, { expiresIn: '24hr' });
};

export const passwordHashing = async (password) => {
   return await bcrypt.hash(password, 10);
}

export const hashedPasswordComparing = async (password, existingPassword) => {
   console.log(password, existingPassword)
   return await bcrypt.compare(password, existingPassword);
}

export const seedUsers = async () => {
   try {
      const roleCounts = await Role.countDocuments()
      const adminRole = roleCounts > 0 ? await Role.findOne({roleName: 'admin'}) : null
      console.log(adminRole)
      const defaultUsers = [
         { username: 'Emp001', email: 'emp@gmail.com', password: 'test', role: adminRole ? adminRole._id : null},
      ];

      for (const user of defaultUsers) {
         const existingUser = await User.findOne({email: user.email});
         if (!existingUser) {
            const hashedPassword = await passwordHashing(user.password);
            const seededUser = await User.create({...user, password: hashedPassword})
         } else {
            console.log(`User already exists: ${user.username}`);
        }
      }
   } catch (error) {
      console.error('Error seeding users:', error);
  }
}