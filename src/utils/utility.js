import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

