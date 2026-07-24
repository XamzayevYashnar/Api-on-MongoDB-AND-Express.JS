import { asyncCatch } from "./asyncCatch.js";
import { ApiError } from "../helpers/ApiError.js";

export const validator = (schema) => {
    return asyncCatch(async (req, res, next) => {
        const validate = typeof schema === "function" ? schema : schema?.createUser;

        const { error, value } = validate(req.body);

        if (error) {
            const errorMsg = error.details?.[0]?.message || error.message;
            throw new ApiError(`Error: ${errorMsg}`, 409);
        }

        req.body = value;
        next();
    });
};