import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import mongoose from 'mongoose';
import todoRouter from './routes/todoRoute'
import indexRouter from './routes'


dotenv.config();

mongoose.connect(process.env.DATABASE_URL!, ()=> {
    console.log("MngoDB connected Successfully...")
})

const port = process.env.PORT || 3700;
const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use('/todos', todoRouter);
app.use('/', indexRouter);

app.listen(port, ()=> {
    console.log("listening on %s", port)
})

