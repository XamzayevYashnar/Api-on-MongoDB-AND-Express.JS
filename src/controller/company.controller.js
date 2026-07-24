import { Company } from "../schema/company.schema.js";
import { BaseController } from "./base.controller.js";
import { asyncCatch } from "../middleware/asyncCatch.js";
import { successResponce } from "../helpers/succes-responce.js";
import { ApiError } from "../helpers/ApiError.js";

class CompanyController extends BaseController {
    findAll = asyncCatch(async (req, res) => {
        const data = await this.schema.find().populate({
            path: 'departments',
            populate: { path: 'staff' }
        });

        if (!data || data.length === 0) {
            return successResponce(res, 'Malumot hali qushilmagan!', 200);
        }

        return successResponce(res, data, 200);
    });

    findOne = asyncCatch(async (req, res) => {
        const data = await this.schema.findById(req.params.id).populate({
            path: 'departments',
            populate: { path: 'staff' }
        });

        if (!data) {
            throw new ApiError('Error id, Page not found! findOne', 404);
        }

        return successResponce(res, data, 200);
    });
}

export default new CompanyController(Company, 'departments')