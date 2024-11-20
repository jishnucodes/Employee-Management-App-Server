import express from 'express'
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { connectToDB } from './src/config/dbConfig.js';
import router from './src/routes/indexRouter.js';

const app = express();

connectToDB()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true, origin: 'http://localhost:3000',                    
}));

const port = process.env.PORT || 3000;

app.use('/api/v1', router)

app.listen(port, (error) => {
    console.log(`Example app listening on port ${port}`);
    
  })