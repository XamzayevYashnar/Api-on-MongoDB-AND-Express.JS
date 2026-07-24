import { Router } from "express";
import DepartmentController from "../controller/department.controller.js";
import { validator } from "../middleware/validator.js";
import { DepartmentValidate } from "../validation/department.validation.js";

const router = Router();

router
    .get('', DepartmentController.findAll)
    .get('/:id', DepartmentController.findOne)
    .post('', validator(DepartmentValidate.postDepartment), DepartmentController.create)
    .put('/:id', validator(DepartmentValidate.postDepartment), DepartmentController.update)
    .patch('/:id', validator(DepartmentValidate.patchDepartment), DepartmentController.patch)
    .delete('/:id', DepartmentController.delete)

export default router