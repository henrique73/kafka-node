import cors from "cors";
import * as dotenv from "dotenv";
import express, { Application } from "express";
import producerRoutes from "./routes/user-routes";
import { Kafka } from 'kafkajs'

dotenv.config();
const app: Application = express();

export const kafka = new Kafka({
    clientId: 'node-crud-application',
    // Change broker to your configuration ->
    brokers: ['Henrique:9092'],
})

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api", producerRoutes);

app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
);
