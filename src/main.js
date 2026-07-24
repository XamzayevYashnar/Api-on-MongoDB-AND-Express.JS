import express from "express";
import { globalErrorHandler } from "../src/middleware/globalErrorHandler.js";
import { obj } from "../src/utils/env.js";
import {router} from "../src/router/index.route.js";
import connectDB from "./db/connectDB.js";

const app = express();
await connectDB();

app.use(express.json());
app.use('/api', router);

app.use(globalErrorHandler);

app.listen(obj.PORT, () => {
    console.log(`Server is running on port ${obj.PORT}`);
});