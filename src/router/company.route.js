import { Router } from "express";
import CompanyController from "../controller/company.controller.js";
import { validator } from "../middleware/validator.js";
import { CompanyValidate } from "../validation/company.validation.js";

const router = Router();

router
    .get('/', CompanyController.findAll)
    .get('/:id', CompanyController.findOne)
    .post('/', validator(CompanyValidate.postCompany), CompanyController.create)
    .put('/:id', validator(CompanyValidate.postCompany), CompanyController.update)
    .patch('/:id', validator(CompanyValidate.patchCompany), CompanyController.patch)
    .delete('/:id', CompanyController.delete)

export default router