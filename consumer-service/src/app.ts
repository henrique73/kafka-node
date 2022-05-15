import cors from "cors";
import * as dotenv from "dotenv";
import express, { Application } from "express";
import { Kafka } from "kafkajs";
import connectDB from "./database/connection";
import UsersHandler from "./controller/user";
import EmailHandler from "./controller/email";

dotenv.config();
connectDB();
const app: Application = express();

export const kafka = new Kafka({
    clientId: 'node-crud-application',
    // Change broker to your configuration ->
    brokers: ['Henrique:9092'],
})

const emailHandler = new EmailHandler();
emailHandler.userRegistrationHandler();

const userHandler = new UsersHandler();
userHandler.userRegistrationHanlder();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
);
