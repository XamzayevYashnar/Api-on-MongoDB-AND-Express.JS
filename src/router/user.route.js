import { Router } from "express";
import usersController from "../controller/users.controller.js"
import { validator } from "../middleware/validator.js";
import { UserValidate } from "../validation/user.validation.js";

const router = Router();

router
    .get('', usersController.findAll)
    .get('/:id', usersController.findOne)
    .post('', validator(UserValidate.postUser), usersController.create)
    .put('/:id', validator(UserValidate.postUser), usersController.update)
    .patch('/:id', validator(UserValidate.patchUser), usersController.patch)
    .delete('/:id', usersController.delete)

export default router