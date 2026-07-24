import departmentRouter from "./departments.routes.js";
import userRouter from "./user.route.js";
import companyRouter from "./company.route.js"
import { Router } from "express";

const router = Router();

router
    .use('/departments', departmentRouter)
    .use('/users', userRouter)
    .use('/company', companyRouter)

export {
    router
}