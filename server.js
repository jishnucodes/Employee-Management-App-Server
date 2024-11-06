import express from 'express'
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { connectToDB } from './src/config/dbConfig.js';
import router from './src/routes/indexRouter.js';
import { seedUsers } from './src/utils/utility.js';

const app = express();

connectToDB()
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.use('/api/v1', router)

app.listen(port, (error) => {
    console.log(`Example app listening on port ${port}`);
    
  })