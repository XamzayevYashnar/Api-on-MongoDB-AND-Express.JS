import { Department } from "../schema/department.schema.js";
import { BaseController } from "./base.controller.js";

class DepartmentController extends BaseController {}

export default new DepartmentController(Department, 'staff')